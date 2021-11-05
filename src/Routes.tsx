import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Edit: loadable(() => import('./pages/edit/Edit')),
  Hw: loadable(() => import('./pages/hw/Hw')),
  Test: loadable(() => import('./pages/test/Test')),
  Bank: loadable(() => import('./pages/bank/Bank')),
  Projection: loadable(() => import('./pages/projection/Projection')),

  Lecture: loadable(() => import('./pages/lecture/Lecture')),
  Trial: loadable(() => import('./pages/lecture/trial/Trial')),
  Numbers: loadable(() => import('./pages/lecture/book1/Numbers')),
  Equations: loadable(() => import('./pages/lecture/book1/Equations')),
  Exponent: loadable(() => import('./pages/lecture/book1/Exponent')),
  C1S1ExpFunction: loadable(() => import('./pages/lecture/book3/C1S1ExponentFunction')),
  C1S2Logarithm: loadable(() => import('./pages/lecture/book3/C1S2Logarithm')),
  C1S3LogFunction: loadable(() => import('./pages/lecture/book3/C1S3LogarithmFunction')),
  C2S1Radius: loadable(() => import('./pages/lecture/book3/C2S1Radius')),
  C2S2TriFormula: loadable(() => import('./pages/lecture/book3/C2S2TrigonometricFormula')),
  C2S3TriFunction: loadable(() => import('./pages/lecture/book3/C2S3TrigonometricFunction')),
  C3S1BasicOfVector: loadable(() => import('./pages/lecture/book3/C3S1BasicOfVector')),
  C3S2InnerProductOfVector: loadable(
    () => import('./pages/lecture/book3/C3S2InnerProductOfVector'),
  ),
  C3S3VectorInLineAndDeterminant: loadable(
    () => import('./pages/lecture/book3/C3S3VectorInLineAndDeterminant'),
  ),
  C3S4GraphDesign: loadable(() => import('./pages/lecture/book3/C3S4GraphDesign')),
  C1S1LimitOfSequence: loadable(() => import('./pages/lecture/book5/C1S1LimitOfSequence')),
  C1S2LimitOfSeries: loadable(() => import('./pages/lecture/book5/C1S2LimitOfSeries')),
  C1S3LimitOfFunction: loadable(() => import('./pages/lecture/book5/C1S3LimitOfFunction')),
  C2S1Derivative: loadable(() => import('./pages/lecture/book5/C2S1Derivative')),
  C2S2GraphicMeaningOfDerivative: loadable(
    () => import('./pages/lecture/book5/C2S2GraphicMeaningOfDerivative'),
  ),
  C3S1Integral: loadable(() => import('./pages/lecture/book5/C3S1Integral')),
  C3S2ApplicationOfIntegral: loadable(
    () => import('./pages/lecture/book5/C3S2ApplicationOfIntegral'),
  ),
  B1C1: loadable(() => import('./pages/lecture/review/B1C1Numbers')),
  B1C2: loadable(() => import('./pages/lecture/review/B1C2Polynomial')),
  B1C3: loadable(() => import('./pages/lecture/review/B1C3LineAndCircle')),
  B2C4: loadable(() => import('./pages/lecture/review/B2C4Series')),
  B2C5: loadable(() => import('./pages/lecture/review/B2C5DataAnalysis')),
  B2C6: loadable(() => import('./pages/lecture/review/B2C6Combination')),
  B2C7: loadable(() => import('./pages/lecture/review/B2C7Trigonometric')),
  B3C8: loadable(() => import('./pages/lecture/review/B3C8TrigonometricFunction')),
  B3C9: loadable(() => import('./pages/lecture/review/B3C9ExpLogFunction')),
  B3C10: loadable(() => import('./pages/lecture/review/B3C10Vector')),
  B4C11: loadable(() => import('./pages/lecture/review/B4C11SpaceConcept')),
  B4C12: loadable(() => import('./pages/lecture/review/B4C12SpaceVector')),
  B4C13: loadable(() => import('./pages/lecture/review/B4C13Probability')),
  B4C14: loadable(() => import('./pages/lecture/review/B4C14Matrix')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/toliman/edit" component={route.Edit} />
      <Route exact={true} path="/toliman/bank" component={route.Bank} />
      <Route exact={true} path="/toliman/projection" component={route.Projection} />

      <Route exact={true} path="/toliman/lecture" component={route.Lecture} />
      <Route exact={true} path="/toliman/lecture/trial" component={route.Trial} />
      <Route exact={true} path="/toliman/lecture/numbers" component={route.Numbers} />
      <Route exact={true} path="/toliman/lecture/equations" component={route.Equations} />
      <Route exact={true} path="/toliman/lecture/exponent" component={route.Exponent} />
      <Route
        exact={true}
        path="/toliman/lecture/exponentFunction"
        component={route.C1S1ExpFunction}
      />
      <Route exact={true} path="/toliman/lecture/logarithm" component={route.C1S2Logarithm} />
      <Route
        exact={true}
        path="/toliman/lecture/logarithmFunction"
        component={route.C1S3LogFunction}
      />
      <Route exact={true} path="/toliman/lecture/radius" component={route.C2S1Radius} />
      <Route
        exact={true}
        path="/toliman/lecture/trigonometricFormula"
        component={route.C2S2TriFormula}
      />
      <Route
        exact={true}
        path="/toliman/lecture/trigonometricFunction"
        component={route.C2S3TriFunction}
      />
      <Route
        exact={true}
        path="/toliman/lecture/basicOfVector"
        component={route.C3S1BasicOfVector}
      />
      <Route
        exact={true}
        path="/toliman/lecture/innerProductOfVector"
        component={route.C3S2InnerProductOfVector}
      />
      <Route
        exact={true}
        path="/toliman/lecture/vectorInLineAndDeterminant"
        component={route.C3S3VectorInLineAndDeterminant}
      />
      <Route exact={true} path="/toliman/lecture/graphDesign" component={route.C3S4GraphDesign} />
      <Route
        exact={true}
        path="/toliman/lecture/limitOfSequence"
        component={route.C1S1LimitOfSequence}
      />
      <Route
        exact={true}
        path="/toliman/lecture/limitOfSeries"
        component={route.C1S2LimitOfSeries}
      />
      <Route
        exact={true}
        path="/toliman/lecture/limitOfFunction"
        component={route.C1S3LimitOfFunction}
      />
      <Route exact={true} path="/toliman/lecture/derivative" component={route.C2S1Derivative} />
      <Route
        exact={true}
        path="/toliman/lecture/graphicMeaningOfDerivative"
        component={route.C2S2GraphicMeaningOfDerivative}
      />
      <Route exact={true} path="/toliman/lecture/integral" component={route.C3S1Integral} />
      <Route
        exact={true}
        path="/toliman/lecture/applicationOfIntegral"
        component={route.C3S2ApplicationOfIntegral}
      />
      <Route exact={true} path="/toliman/lecture/B1C1" component={route.B1C1} />
      <Route exact={true} path="/toliman/lecture/B1C2" component={route.B1C2} />
      <Route exact={true} path="/toliman/lecture/B1C3" component={route.B1C3} />
      <Route exact={true} path="/toliman/lecture/B2C4" component={route.B2C4} />
      <Route exact={true} path="/toliman/lecture/B2C5" component={route.B2C5} />
      <Route exact={true} path="/toliman/lecture/B2C6" component={route.B2C6} />
      <Route exact={true} path="/toliman/lecture/B2C7" component={route.B2C7} />
      <Route exact={true} path="/toliman/lecture/B3C8" component={route.B3C8} />
      <Route exact={true} path="/toliman/lecture/B3C9" component={route.B3C9} />
      <Route exact={true} path="/toliman/lecture/B3C10" component={route.B3C10} />
      <Route exact={true} path="/toliman/lecture/B4C11" component={route.B4C11} />
      <Route exact={true} path="/toliman/lecture/B4C12" component={route.B4C12} />
      <Route exact={true} path="/toliman/lecture/B4C13" component={route.B4C13} />
      <Route exact={true} path="/toliman/lecture/B4C14" component={route.B4C14} />

      <Route exact={true} path="/toliman/hw" component={route.Hw} />
      <Route exact={true} path="/toliman/test" component={route.Test} />
      <Route exact={true} path="/toliman" component={route.Home} />
      <Redirect to="/toliman" />
    </Switch>
  );
};

export default AppRoutes;
