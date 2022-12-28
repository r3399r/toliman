import { Navigate, Route, Routes } from 'react-router-dom';
import Bank from './pages/bank/Bank';
import Edit from './pages/edit/Edit';
import Home from './pages/home/Home';
import Hw from './pages/hw/Hw';
import Arithmatic from './pages/lecture/book0/Arithmatic';
import Linear from './pages/lecture/book0/Linear';
import Quadratic from './pages/lecture/book0/Quadratic';
import SquareRoot from './pages/lecture/book0/SquareRoot';
import C1S1Number from './pages/lecture/book1/C1S1Number';
import C1S2Absolute from './pages/lecture/book1/C1S2Absolute';
import C1S3CommonLog from './pages/lecture/book1/C1S3CommonLog';
import C2S1 from './pages/lecture/book1/C2S1';
import C2S2 from './pages/lecture/book1/C2S2';
import C2S3 from './pages/lecture/book1/C2S3';
import C2S4 from './pages/lecture/book1/C2S4';
import C3S1 from './pages/lecture/book1/C3S1';
import C3S2 from './pages/lecture/book1/C3S2';
import C3S3 from './pages/lecture/book1/C3S3';
import B2C1S1 from './pages/lecture/book2/B2C1S1';
import B2C1S2 from './pages/lecture/book2/B2C1S2';
import C1S1ExponentFunction from './pages/lecture/book3/C1S1ExponentFunction';
import C1S2Logarithm from './pages/lecture/book3/C1S2Logarithm';
import C1S3LogarithmFunctiontsx from './pages/lecture/book3/C1S3LogarithmFunction';
import C2S1Radius from './pages/lecture/book3/C2S1Radius';
import C2S2TrigonometricFormula from './pages/lecture/book3/C2S2TrigonometricFormula';
import C2S3TrigonometricFunction from './pages/lecture/book3/C2S3TrigonometricFunction';
import C3S1BasicOfVector from './pages/lecture/book3/C3S1BasicOfVector';
import C3S2InnerProductOfVector from './pages/lecture/book3/C3S2InnerProductOfVector';
import C3S3VectorInLineAndDeterminant from './pages/lecture/book3/C3S3VectorInLineAndDeterminant';
import C3S4GraphDesign from './pages/lecture/book3/C3S4GraphDesign';
import C1S1BasicOfSpace from './pages/lecture/book4/C1S1BasicOfSpace';
import C1S2SpaceCoordinate from './pages/lecture/book4/C1S2SpaceCoordinate';
import C1S3SphereAndConics from './pages/lecture/book4/C1S3SphereAndConics';
import C2S1InnerProductOfSpace from './pages/lecture/book4/C2S1InnerProductOfSpace';
import C2S2OuterProduct from './pages/lecture/book4/C2S2OuterProduct';
import C2S3PlaneEquation from './pages/lecture/book4/C2S3PlaneEquation';
import C2S4LineEquation from './pages/lecture/book4/C2S4LineEquation';
import C3S1CondProbability from './pages/lecture/book4/C3S1CondProbability';
import C3S2IndependentEvent from './pages/lecture/book4/C3S2IndependentEvent';
import C4S1SystemOfEquations from './pages/lecture/book4/C4S1SystemOfEquations';
import C4S2MatrixOperation from './pages/lecture/book4/C4S2MatrixOperation';
import C4S3InverseAndTransition from './pages/lecture/book4/C4S3InverseAndTransition';
import C4S4LinearTransform from './pages/lecture/book4/C4S4LinearTransform';
import C1S1LimitOfSequence from './pages/lecture/book5/C1S1LimitOfSequence';
import C1S2LimitOfSeries from './pages/lecture/book5/C1S2LimitOfSeries';
import C1S3LimitOfFunction from './pages/lecture/book5/C1S3LimitOfFunction';
import C2S1Derivative from './pages/lecture/book5/C2S1Derivative';
import C2S2GraphicMeaningOfDerivative from './pages/lecture/book5/C2S2GraphicMeaningOfDerivative';
import C3S1Integral from './pages/lecture/book5/C3S1Integral';
import C3S2ApplicationOfIntegral from './pages/lecture/book5/C3S2ApplicationOfIntegral';
import Lecture from './pages/lecture/Lecture';
import B1C1Numbers from './pages/lecture/review/B1C1Numbers';
import B1C2Polynomial from './pages/lecture/review/B1C2Polynomial';
import B1C3LineAndCircle from './pages/lecture/review/B1C3LineAndCircle';
import B2C4Series from './pages/lecture/review/B2C4Series';
import B2C5DataAnalysis from './pages/lecture/review/B2C5DataAnalysis';
import B2C6Combination from './pages/lecture/review/B2C6Combination';
import B2C7Trigonometric from './pages/lecture/review/B2C7Trigonometric';
import B3C10Vector from './pages/lecture/review/B3C10Vector';
import B3C8TrigonometricFunction from './pages/lecture/review/B3C8TrigonometricFunction';
import B3C9ExpLogFunction from './pages/lecture/review/B3C9ExpLogFunction';
import B4C11SpaceConcept from './pages/lecture/review/B4C11SpaceConcept';
import B4C12SpaceVector from './pages/lecture/review/B4C12SpaceVector';
import B4C13Probability from './pages/lecture/review/B4C13Probability';
import B4C14Matrix from './pages/lecture/review/B4C14Matrix';
import Trial from './pages/lecture/trial/Trial';
import Projection from './pages/projection/Projection';
import Quiz from './pages/test/Quiz';

const AppRoutes = () => (
  <Routes>
    <Route path="/toliman/edit" element={<Edit />} />
    <Route path="/toliman/bank" element={<Bank />} />
    <Route path="/toliman/projection" element={<Projection />} />
    <Route path="/toliman/lecture" element={<Lecture />} />
    <Route path="/toliman/lecture/trial" element={<Trial />} />
    <Route path="/toliman/lecture/b0c1" element={<Arithmatic />} />
    <Route path="/toliman/lecture/b0c2" element={<Linear />} />
    <Route path="/toliman/lecture/b0c3" element={<SquareRoot />} />
    <Route path="/toliman/lecture/b0c4" element={<Quadratic />} />

    <Route path="/toliman/lecture/b1c1s1" element={<C1S1Number />} />
    <Route path="/toliman/lecture/b1c1s2" element={<C1S2Absolute />} />
    <Route path="/toliman/lecture/b1c1s3" element={<C1S3CommonLog />} />
    <Route path="/toliman/lecture/b1c2s1" element={<C2S1 />} />
    <Route path="/toliman/lecture/b1c2s2" element={<C2S2 />} />
    <Route path="/toliman/lecture/b1c2s3" element={<C2S3 />} />
    <Route path="/toliman/lecture/b1c2s4" element={<C2S4 />} />
    <Route path="/toliman/lecture/b1c3s1" element={<C3S1 />} />
    <Route path="/toliman/lecture/b1c3s2" element={<C3S2 />} />
    <Route path="/toliman/lecture/b1c3s3" element={<C3S3 />} />

    <Route path="/toliman/lecture/b2c1s1" element={<B2C1S1 />} />
    <Route path="/toliman/lecture/b2c1s2" element={<B2C1S2 />} />

    <Route path="/toliman/lecture/exponentFunction" element={<C1S1ExponentFunction />} />
    <Route path="/toliman/lecture/logarithm" element={<C1S2Logarithm />} />
    <Route path="/toliman/lecture/logarithmFunction" element={<C1S3LogarithmFunctiontsx />} />
    <Route path="/toliman/lecture/radius" element={<C2S1Radius />} />
    <Route path="/toliman/lecture/trigonometricFormula" element={<C2S2TrigonometricFormula />} />
    <Route path="/toliman/lecture/trigonometricFunction" element={<C2S3TrigonometricFunction />} />
    <Route path="/toliman/lecture/basicOfVector" element={<C3S1BasicOfVector />} />
    <Route path="/toliman/lecture/innerProductOfVector" element={<C3S2InnerProductOfVector />} />
    <Route
      path="/toliman/lecture/vectorInLineAndDeterminant"
      element={<C3S3VectorInLineAndDeterminant />}
    />
    <Route path="/toliman/lecture/graphDesign" element={<C3S4GraphDesign />} />

    <Route path="/toliman/lecture/basicOfSpace" element={<C1S1BasicOfSpace />} />
    <Route path="/toliman/lecture/spaceCoordinate" element={<C1S2SpaceCoordinate />} />
    <Route path="/toliman/lecture/sphereAndConics" element={<C1S3SphereAndConics />} />
    <Route path="/toliman/lecture/innerProductOfSpace" element={<C2S1InnerProductOfSpace />} />
    <Route path="/toliman/lecture/outerProduct" element={<C2S2OuterProduct />} />
    <Route path="/toliman/lecture/planeEquation" element={<C2S3PlaneEquation />} />
    <Route path="/toliman/lecture/lineEquation" element={<C2S4LineEquation />} />
    <Route path="/toliman/lecture/condProbability" element={<C3S1CondProbability />} />
    <Route path="/toliman/lecture/independentEvent" element={<C3S2IndependentEvent />} />
    <Route path="/toliman/lecture/systemOfEquations" element={<C4S1SystemOfEquations />} />
    <Route path="/toliman/lecture/matrixOperation" element={<C4S2MatrixOperation />} />
    <Route path="/toliman/lecture/inverseAndTransition" element={<C4S3InverseAndTransition />} />
    <Route path="/toliman/lecture/linearTransform" element={<C4S4LinearTransform />} />

    <Route path="/toliman/lecture/limitOfSequence" element={<C1S1LimitOfSequence />} />
    <Route path="/toliman/lecture/limitOfSeries" element={<C1S2LimitOfSeries />} />
    <Route path="/toliman/lecture/limitOfFunction" element={<C1S3LimitOfFunction />} />
    <Route path="/toliman/lecture/derivative" element={<C2S1Derivative />} />
    <Route
      path="/toliman/lecture/graphicMeaningOfDerivative"
      element={<C2S2GraphicMeaningOfDerivative />}
    />
    <Route path="/toliman/lecture/integral" element={<C3S1Integral />} />
    <Route path="/toliman/lecture/applicationOfIntegral" element={<C3S2ApplicationOfIntegral />} />

    <Route path="/toliman/lecture/B1C1" element={<B1C1Numbers />} />
    <Route path="/toliman/lecture/B1C2" element={<B1C2Polynomial />} />
    <Route path="/toliman/lecture/B1C3" element={<B1C3LineAndCircle />} />
    <Route path="/toliman/lecture/B2C4" element={<B2C4Series />} />
    <Route path="/toliman/lecture/B2C5" element={<B2C5DataAnalysis />} />
    <Route path="/toliman/lecture/B2C6" element={<B2C6Combination />} />
    <Route path="/toliman/lecture/B2C7" element={<B2C7Trigonometric />} />
    <Route path="/toliman/lecture/B3C8" element={<B3C8TrigonometricFunction />} />
    <Route path="/toliman/lecture/B3C9" element={<B3C9ExpLogFunction />} />
    <Route path="/toliman/lecture/B3C10" element={<B3C10Vector />} />
    <Route path="/toliman/lecture/B4C11" element={<B4C11SpaceConcept />} />
    <Route path="/toliman/lecture/B4C12" element={<B4C12SpaceVector />} />
    <Route path="/toliman/lecture/B4C13" element={<B4C13Probability />} />
    <Route path="/toliman/lecture/B4C14" element={<B4C14Matrix />} />

    <Route path="/toliman/hw" element={<Hw />} />
    <Route path="/toliman/test" element={<Quiz />} />

    <Route path="/toliman" element={<Home />} />
    <Route path="/*" element={<Navigate to={'/toliman'} />} />
  </Routes>
);

export default AppRoutes;
