import { MathJax } from 'better-react-mathjax';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { getQuestion } from 'src/services/questionService';

const Gsat111 = () => (
  // <div style={{ pageBreakAfter: 'always' }} />

  <MathJax>
    <div style={{ width: '17cm', padding: '0 1cm', margin: '0 auto' }}>
      <h1>111學測數A</h1>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('186823bac74')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('186824ac3ce')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '2.5cm', position: 'relative' }}>
        <Textarea2MathJax text={getQuestion('18682554aed')?.question ?? ''} />
        <img
          style={{ position: 'absolute', right: '0', top: '1.4cm' }}
          src={'/toliman/images/18682554aed.PNG'}
        />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('1868261d117')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('1868264a1b9')?.question ?? ''} />
      </div>
      <div style={{ pageBreakAfter: 'always' }} />
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('1868266ca4a')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('186826b502c')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('186826fd317')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682736964')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('1868276c703')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm', position: 'relative' }}>
        <Textarea2MathJax text={getQuestion('1868279a5a7')?.question ?? ''} />
        <img
          style={{ position: 'absolute', right: '0', bottom: '0.5cm' }}
          src={'/toliman/images/1868279a5a7.PNG'}
        />
      </div>
      <div style={{ pageBreakAfter: 'always' }} />
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('186827e7f4f')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682806494')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('186828488cf')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '2.6cm' }}>
        <img style={{ float: 'right', width: '3.8cm' }} src={'/toliman/images/1868286fb96.PNG'} />
        <Textarea2MathJax text={getQuestion('1868286fb96')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682de1ad3')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682e06d63')?.question ?? ''} />
      </div>
      <div style={{ pageBreakAfter: 'always' }} />
      <div style={{ paddingBottom: '3.6cm', position: 'relative' }}>
        <Textarea2MathJax text={getQuestion('18682e36751')?.question ?? ''} />
        <img
          style={{ position: 'absolute', right: '0', bottom: '0.5cm' }}
          src={'/toliman/images/18682e36751.PNG'}
        />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682e6285d')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682e71d80')?.question ?? ''} />
      </div>
      <div style={{ paddingBottom: '0.5cm' }}>
        <Textarea2MathJax text={getQuestion('18682e7bf02')?.question ?? ''} />
      </div>
    </div>
  </MathJax>
);
export default Gsat111;
