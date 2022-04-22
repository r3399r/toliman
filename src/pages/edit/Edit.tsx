import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from '@mui/material';
import { MathJax } from 'better-react-mathjax';
import { ChangeEvent, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { chapterList, Question } from 'src/model/bank';
import style from './Edit.module.scss';

const Home = () => {
  const [message, setMessage] = useState<string>();
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

  const handleEdit = (ev: ChangeEvent<HTMLInputElement>) => {
    try {
      const inputJSON: string = ev.target.value;
      const res: Question = JSON.parse(inputJSON);

      if (
        res.question === undefined ||
        res.question === undefined ||
        res.answer === undefined ||
        res.hasImage === undefined
      )
        setMessage('格式不符');
      setChapter(res.chapter);
      setQuestion(res.question);
      setAnswer(res.answer);
      setHasImage(res.hasImage);
    } catch (e) {
      setMessage('格式不符');
    }
  };

  const handleCheckbox = (val: ChangeEvent<HTMLInputElement>) => {
    setChapter(val.target.value);
  };

  const handleQuestionEvent = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuestion(ev.target.value);
  };

  const handleAnswerEvent = (ev: ChangeEvent<HTMLInputElement>) => {
    setAnswer(ev.target.value);
  };

  const onCheckboxClick = () => {
    setHasImage(!hasImage);
  };

  const onCopy = () => {
    setMessage('已複製');
  };

  const onClose = () => {
    setMessage(undefined);
  };

  const result: Question = { id: randomId, chapter, question, answer, hasImage };

  return (
    <>
      <div className={style.content}>
        <div>修改</div>
        <TextField fullWidth={true} placeholder="貼上JSON" onChange={handleEdit} />
        <div>章節</div>
        <RadioGroup row={true} value={chapter} onChange={handleCheckbox}>
          {chapterList?.map((v: string, i: number) => (
            <FormControlLabel key={i} value={v} control={<Radio size="small" />} label={v} />
          ))}
        </RadioGroup>
        <div>題目</div>
        <TextField
          placeholder="輸入題目"
          multiline={true}
          fullWidth={true}
          onChange={handleQuestionEvent}
          value={question}
        />
        <div>答案</div>
        <TextField
          multiline={true}
          fullWidth={true}
          placeholder="輸入答案"
          onChange={handleAnswerEvent}
          value={answer}
        />
        <FormControlLabel
          control={<Checkbox id="hasImage" checked={hasImage} onClick={onCheckboxClick} />}
          label="是否有圖"
        />
        <hr />
        <MathJax className={style.preview}>
          {isRendering === true && <div>產生中...</div>}
          {isRendering === false && question && <Textarea2MathJax text={question} />}
          {isRendering === false && answer && (
            <Textarea2MathJax className={style.ans} text={'Ans: ' + answer} />
          )}
        </MathJax>
        <hr />
        <div>{JSON.stringify(result)}</div>
        <div>
          <CopyToClipboard
            text={JSON.stringify(result)}
            onCopy={onCopy}
            options={{ format: 'text/plain' }}
          >
            <Button variant="contained">複製文字</Button>
          </CopyToClipboard>
        </div>
      </div>
      <Snackbar
        open={message !== undefined}
        autoHideDuration={3000}
        onClose={onClose}
        message={message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  );
};

export default Home;
