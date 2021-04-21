import { Button, Checkbox, Input, Upload } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { chapterList, Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Edit.module.scss';

const Home = () => {
  const [countdown, setCountdown] = useState<NodeJS.Timeout>();
  const [isRendering, setIsRendering] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

  const [chapter, setChapter] = useState<string[]>([]);

  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const [hasImage, setHasImage] = useState<boolean>(false);
  const [image, setImage] = useState<File>();

  useEffect(() => {
    setId(Date.now().toString(16));
  }, []);

  useEffect(() => {
    setIsRendering(true);
    if (countdown) clearTimeout(countdown);
    const newCountdown = setTimeout(() => {
      setIsRendering(false);
    }, 600);
    setCountdown(newCountdown);
  }, [question, answer]);

  const handleEdit = (ev: { target: HTMLInputElement }) => {
    const inputId: string = ev.target.value;
    const res: Question = getQuestion(id);

    setId(inputId);
    setChapter(res.chapter);
    setQuestion(res.question);
    setAnswer(res.answer);
  };

  const handleCheckbox = (val: CheckboxValueType[]) => {
    setChapter(val.map((v: CheckboxValueType) => String(v)));
  };

  const handleQuestionEvent = (ev: { target: HTMLTextAreaElement }) => {
    setQuestion(ev.target.value);
  };

  const handleAnswerEvent = (ev: { target: HTMLTextAreaElement }) => {
    setAnswer(ev.target.value);
  };

  const onCheckboxClick = () => {
    if (!hasImage === false) setImage(undefined);
    setHasImage(!hasImage);
  };

  const displayImage = (file: File) => {
    setImage(file);

    return false;
  };

  const result: Question = { id, chapter, question, answer, hasImage };

  return (
    <div className={style.content}>
      <div>修改</div>
      <Input placeholder="貼上JSON" onChange={handleEdit} />
      <div>章節</div>
      <Checkbox.Group options={chapterList} onChange={handleCheckbox} />
      <div>題目</div>
      <Input.TextArea
        rows={4}
        placeholder="輸入題目"
        onChange={handleQuestionEvent}
        value={question}
      />
      <div>答案</div>
      <Input.TextArea rows={2} placeholder="輸入答案" onChange={handleAnswerEvent} value={answer} />
      <div>
        <Checkbox id="hasImage" onClick={onCheckboxClick}>
          是否有圖
        </Checkbox>
      </div>
      {hasImage && (
        <Upload beforeUpload={displayImage} maxCount={1}>
          <Button>選擇檔案</Button>
        </Upload>
      )}
      <hr />
      <div className={style.preview}>
        {isRendering === true && <div>產生中...</div>}
        {image && (
          <img
            className={style.image}
            src={URL.createObjectURL(image)}
            alt=""
            role="presentation"
          />
        )}
        {isRendering === false && question && <Textarea2MathJax text={question} />}
        {isRendering === false && answer && (
          <Textarea2MathJax className={style.ans} text={'Ans: ' + answer} allowBlock={false} />
        )}
      </div>
      <hr />
      <div>{JSON.stringify(result)}</div>
      <div>
        <CopyToClipboard text={JSON.stringify(result)}>
          <Button>複製文字</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Home;
