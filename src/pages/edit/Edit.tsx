import { Button, Input, Select, Upload } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { useEffect, useState } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { loadFile } from 'src/services/dropboxService';
import { getRows } from 'src/services/googleService';
import { Question, uploadQuestion } from 'src/services/questionService';
import style from './Edit.module.scss';

const Home = () => {
  const [countdown, setCountdown] = useState<NodeJS.Timeout>();
  const [isRendering, setIsRendering] = useState<boolean>(false);

  const [id, setId] = useState<string>('');

  const [authorList, setAuthorList] = useState<GoogleSpreadsheetRow[]>([]);
  const [author, setAuthor] = useState<string>('');

  const [chapterList, setChapterList] = useState<GoogleSpreadsheetRow[]>([]);
  const [chapterId, setChapterId] = useState<string>('');

  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const [hasImage, setHasImage] = useState<boolean>(false);
  const [image, setImage] = useState<File>();

  useEffect(() => {
    setId(Date.now().toString(16));
    getRows('372130198').then((rows: GoogleSpreadsheetRow[]) => {
      setChapterList(rows);
    });
    getRows('10449496').then((rows: GoogleSpreadsheetRow[]) => {
      setAuthorList(rows);
    });
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
    const obj: Question = JSON.parse(ev.target.value);

    setId(obj.id);
    setQuestion(obj.question);
    setAnswer(obj.answer);

    if (obj.hasImage)
      loadFile(obj.id).then((res: any) => {
        setImage(res.result.fileBlob);
      });
  };

  const handleSelectAuthor = (value: string) => {
    setAuthor(value);
  };

  const handleSelectChapter = (value: string) => {
    setChapterId(value);
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

  const handleUpload = () => {
    if (author === '') alert('請選擇作者');
    else if (chapterId === '') alert('請選擇章節');
    else if (question === '') alert('請輸入題目');
    else if (answer === '') alert('請輸入答案');
    else if (hasImage && !image) alert('請上傳圖片');
    else
      uploadQuestion(result, author, image).then(() => {
        setId(Date.now().toString(16));
      });
  };

  const result: Question = { id, chapterId, question, answer, hasImage };

  return (
    <div className={style.content}>
      <div>修改</div>
      <Input placeholder="貼上JSON" onChange={handleEdit} />
      <div>作者</div>
      <Select onChange={handleSelectAuthor} defaultValue="default">
        <Select.Option value="default" disabled={true} hidden={true}>
          選擇作者
        </Select.Option>
        {authorList.map((val: GoogleSpreadsheetRow, i: number) => {
          return (
            <Select.Option key={i} value={val.name}>
              {val.name}
            </Select.Option>
          );
        })}
      </Select>
      <div>章節</div>
      <Select onChange={handleSelectChapter} defaultValue="default">
        <Select.Option value="default" disabled={true} hidden={true}>
          選擇章節
        </Select.Option>
        {chapterList.map((val: GoogleSpreadsheetRow, i: number) => {
          return (
            <Select.Option key={i} value={val.id}>
              {val.chapter}
            </Select.Option>
          );
        })}
      </Select>
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
      <Button onClick={handleUpload}>上傳</Button>
    </div>
  );
};

export default Home;
