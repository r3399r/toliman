import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { uploadFile } from 'src/services/dropboxService';
import style from './Home.module.scss';

const Home = () => {
  const [countdown, setCountdown] = useState<NodeJS.Timeout>();
  const [id, setId] = useState<string>();

  const [chapter, setChapter] = useState<string>();

  const [question, setQuestion] = useState<string>();
  const [isQueAreaDisable, setIsQueAreaDisable] = useState<boolean>(false);

  const [answer, setAnswer] = useState<string>();
  const [isAnsAreaDisable, setIsAnsAreaDisable] = useState<boolean>(false);

  const [hasImage, setHasImage] = useState<boolean>(false);
  const [image, setImage] = useState<File>();

  useEffect(() => {
    setId((Date.now() * 1000 + Math.floor(Math.random() * 1000)).toString(16));
  }, []);

  const handleChapterInput = (ev: { target: HTMLInputElement }) => {
    setChapter(ev.target.value);
  };

  const handleQuestionEvent = (ev: { target: HTMLTextAreaElement }) => {
    setIsAnsAreaDisable(true);
    if (countdown) clearTimeout(countdown);
    const newCountdown = setTimeout(() => {
      setQuestion(ev.target.value);
      setIsAnsAreaDisable(false);
    }, 600);
    setCountdown(newCountdown);
  };

  const handleAnswerEvent = (ev: { target: HTMLTextAreaElement }) => {
    setIsQueAreaDisable(true);
    if (countdown) clearTimeout(countdown);
    const newCountdown = setTimeout(() => {
      setAnswer(ev.target.value);
      setIsQueAreaDisable(false);
    }, 600);
    setCountdown(newCountdown);
  };

  const onCheckboxClick = () => setHasImage(!hasImage);

  const displayImage = (ev: { target: HTMLInputElement }) => {
    if (ev.target.files === null || ev.target.files.length === 0) return;
    setImage(ev.target.files[0]);
  };

  const uploadImage = () => {
    if (image === undefined) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result === null) return;
      uploadFile({ contents: reader.result, path: `/toliman/${id}.jpg` });
    };
    reader.readAsArrayBuffer(image);
  };

  const result: string = JSON.stringify({ id, chapter, question, answer, hasImage });

  return (
    <div className={style.content}>
      <div>ID: {id}</div>
      <div>章節</div>
      <input
        className="uk-input"
        type="text"
        placeholder="輸入章節"
        onChange={handleChapterInput}
      />
      <div>題目</div>
      <textarea
        className="uk-textarea"
        rows={4}
        placeholder="輸入題目"
        onChange={handleQuestionEvent}
        disabled={isQueAreaDisable}
      />
      <div>答案</div>
      <textarea
        className="uk-textarea"
        rows={2}
        placeholder="輸入答案"
        onChange={handleAnswerEvent}
        disabled={isAnsAreaDisable}
      />
      <div>
        <input
          id="hasImage"
          aria-checked="false"
          className="uk-checkbox"
          type="checkbox"
          onClick={onCheckboxClick}
        />
        <label htmlFor="hasImage">&nbsp;是否有圖</label>
      </div>
      {hasImage && (
        <div>
          <input type="file" onChange={displayImage} />
        </div>
      )}
      <hr />
      {question && <Textarea2MathJax text={question} />}
      {hasImage && image && (
        <img className={style.img} src={URL.createObjectURL(image)} alt="" role="presentation" />
      )}
      {answer && (
        <Textarea2MathJax className={style.ans} text={'Ans: ' + answer} allowBlock={false} />
      )}
      <hr />
      <div>{result}</div>
      <div>
        <CopyToClipboard text={result}>
          <button className="uk-button uk-button-primary">複製文字</button>
        </CopyToClipboard>
      </div>
      {hasImage && (
        <div>
          <button className="uk-button uk-button-secondary" onClick={uploadImage}>
            上傳圖片
          </button>
          <a
            href="https://www.dropbox.com/sh/ufg8rb6uzaegerb/AAD7SHNiitpiQgetY6X3_5aLa?dl=0"
            target="_blank"
            rel="noreferrer"
          >
            請點此確認上傳成功
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
