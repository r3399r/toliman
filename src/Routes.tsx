import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Edit: loadable(() => import('./pages/edit/Edit')),
  Hw: loadable(() => import('./pages/hw/Hw')),
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
  B1C1: loadable(() => import('./pages/lecture/review/B1C1Numbers')),
  B1C2: loadable(() => import('./pages/lecture/review/B1C2Polynomial')),
  B1C3: loadable(() => import('./pages/lecture/review/B1C3LineAndCircle')),
  B2C4: loadable(() => import('./pages/lecture/review/B2C4Series')),
  B2C5: loadable(() => import('./pages/lecture/review/B2C5DataAnalysis')),
  B2C6: loadable(() => import('./pages/lecture/review/B2C6Combination')),
  B2C7: loadable(() => import('./pages/lecture/review/B2C7Trigonometric')),
  B3C8: loadable(() => import('./pages/lecture/review/B3C8TrigonometricFunction')),
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
      <Route exact={true} path="/toliman/lecture/B1C1" component={route.B1C1} />
      <Route exact={true} path="/toliman/lecture/B1C2" component={route.B1C2} />
      <Route exact={true} path="/toliman/lecture/B1C3" component={route.B1C3} />
      <Route exact={true} path="/toliman/lecture/B2C4" component={route.B2C4} />
      <Route exact={true} path="/toliman/lecture/B2C5" component={route.B2C5} />
      <Route exact={true} path="/toliman/lecture/B2C6" component={route.B2C6} />
      <Route exact={true} path="/toliman/lecture/B2C7" component={route.B2C7} />
      <Route exact={true} path="/toliman/lecture/B3C8" component={route.B3C8} />

      <Route exact={true} path="/toliman/hw" component={route.Hw} />
      <Route exact={true} path="/toliman" component={route.Home} />
      <Redirect to="/toliman" />
    </Switch>
  );
};

export default AppRoutes;
