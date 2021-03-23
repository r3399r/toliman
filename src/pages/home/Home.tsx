import { useState } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';

const Home = () => {
  const [value, setValue] = useState<string>();
  const [countdown, setCountdown] = useState<NodeJS.Timeout>();

  const handleEvent = (ev: { target: HTMLTextAreaElement }) => {
    if (countdown) clearTimeout(countdown);
    const newCountdown = setTimeout(() => setValue(ev.target.value), 600);
    setCountdown(newCountdown);
  };

  return (
    <div>
      <textarea className="uk-textarea" rows={4} placeholder="Textarea" onChange={handleEvent} />
      {value && <Textarea2MathJax text={value} />}
    </div>
  );
};

export default Home;
