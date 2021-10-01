import { Button, Checkbox, Input, message, Radio, RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { chapterList, Question } from 'src/model/bank';
import style from './Edit.module.scss';

const Home = () => {
  const [countdown, setCountdown] = useState<NodeJS.Timeout>();
  const [isRendering, setIsRendering] = useState<boolean>(false);

  const [randomId, setRandomId] = useState<string>('');

  const [chapter, setChapter] = useState<string>('');

  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const [hasImage, setHasImage] = useState<boolean>(false);

  useEffect(() => {
    setRandomId(Date.now().toString(16));
  }, [question, answer]);

  useEffect(() => {
    setIsRendering(true);
    if (countdown) clearTimeout(countdown);
    const newCountdown = setTimeout(() => {
      setIsRendering(false);
    }, 600);
    setCountdown(newCountdown);
  }, [question, answer]);

  const handleEdit = (ev: { target: HTMLInputElement }) => {
    try {
      const inputJSON: string = ev.target.value;
      const res: Question = JSON.parse(inputJSON);

      if (
        res.question === undefined ||
        res.question === undefined ||
        res.answer === undefined ||
        res.hasImage === undefined
      )
        message.error('格式不符');
      setChapter(res.chapter);
      setQuestion(res.question);
      setAnswer(res.answer);
      setHasImage(res.hasImage);
    } catch (e) {
      message.error('格式不符');
    }
  };

  const handleCheckbox = (val: RadioChangeEvent) => {
    setChapter(val.target.value);
  };

  const handleQuestionEvent = (ev: { target: HTMLTextAreaElement }) => {
    setQuestion(ev.target.value);
  };

  const handleAnswerEvent = (ev: { target: HTMLTextAreaElement }) => {
    setAnswer(ev.target.value);
  };

  const onCheckboxClick = () => {
    setHasImage(!hasImage);
  };

  const onCopy = () => {
    message.success('已複製');
  };

  const result: Question = { id: randomId, chapter, question, answer, hasImage };

  return (
    <div className={style.content}>
      <div>修改</div>
      <Input placeholder="貼上JSON" onChange={handleEdit} />
      <div>章節</div>
      <Radio.Group options={chapterList} onChange={handleCheckbox} value={chapter} />
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
        <Checkbox id="hasImage" checked={hasImage} onClick={onCheckboxClick}>
          是否有圖
        </Checkbox>
      </div>
      <hr />
      <div className={style.preview}>
        {isRendering === true && <div>產生中...</div>}
        {isRendering === false && question && <Textarea2MathJax text={question} />}
        {isRendering === false && answer && (
          <Textarea2MathJax className={style.ans} text={'Ans: ' + answer} />
        )}
      </div>
      <hr />
      <div>{JSON.stringify(result)}</div>
      <div>
        <CopyToClipboard
          text={JSON.stringify(result)}
          onCopy={onCopy}
          options={{ format: 'text/plain' }}
        >
          <Button>複製文字</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Home;
