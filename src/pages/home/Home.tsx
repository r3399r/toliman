import { Dropbox } from 'dropbox';
import _fetch from 'isomorphic-fetch';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Textarea2MathJax from 'src/component/Textarea2MathJax';

const Home = () => {
  const [countdown, setCountdown] = useState<NodeJS.Timeout>();
  const [id, setId] = useState<string>();

  const [question, setQuestion] = useState<string>();
  const [isQueAreaDisable, setIsQueAreaDisable] = useState<boolean>(false);

  const [answer, setAnswer] = useState<string>();
  const [isAnsAreaDisable, setIsAnsAreaDisable] = useState<boolean>(false);

  const [imgSrc, setImgSrc] = useState<string>();

  useEffect(() => {
    setId((Date.now() * 1000 + Math.floor(Math.random() * 1000)).toString(16));
  }, []);

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

  const uploadImage = (ev: any) => {
    setImgSrc(URL.createObjectURL(ev.target.files[0]));

    const reader = new FileReader();
    reader.onload = () => {
      const dropbox = new Dropbox({
        accessToken: 'oDm3_-3br4cAAAAAAAG4jAOBl0tgqzsLfNyQNjisoLRuwEpX5Fc40fPNKIAtFEYy',
        fetch: _fetch,
      });
      if (reader.result === null) return;
      dropbox.filesUpload({
        contents: reader.result,
        path: `/toliman/${ev.target.files[0].name}`,
        mode: { '.tag': 'overwrite' },
      });
    };
    reader.readAsArrayBuffer(ev.target.files[0]);
  };

  const result: string = JSON.stringify({ id, question, answer });

  return (
    <div>
      <div>ID: {id}</div>
      <div>題目</div>
      <textarea
        className="uk-textarea"
        rows={4}
        placeholder="Textarea"
        onChange={handleQuestionEvent}
        disabled={isQueAreaDisable}
      />
      <div>答案</div>
      <textarea
        className="uk-textarea"
        rows={2}
        placeholder="Textarea"
        onChange={handleAnswerEvent}
        disabled={isAnsAreaDisable}
      />
      {question && <Textarea2MathJax text={question} />}
      {answer && <Textarea2MathJax text={answer} allowBlock={false} />}
      <div>{result}</div>
      <CopyToClipboard text={result}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>
      <div>
        <input type="file" onChange={uploadImage} />
      </div>
      <img src={imgSrc} alt="" role="presentation" />
    </div>
  );
};

export default Home;
