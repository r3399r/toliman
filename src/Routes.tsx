import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Edit: loadable(() => import('./pages/edit/Edit')),
  Hw: loadable(() => import('./pages/hw/Hw')),
  Bank: loadable(() => import('./pages/bank/Bank')),

  Lecture: loadable(() => import('./pages/lecture/Lecture')),
  Numbers: loadable(() => import('./pages/lecture/book1/Numbers')),
  Equations: loadable(() => import('./pages/lecture/book1/Equations')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/toliman/edit" component={route.Edit} />
      <Route exact={true} path="/toliman/bank" component={route.Bank} />
      <Route exact={true} path="/toliman/lecture" component={route.Lecture} />
      <Route exact={true} path="/toliman/lecture/numbers" component={route.Numbers} />
      <Route exact={true} path="/toliman/lecture/equations" component={route.Equations} />
      <Route exact={true} path="/toliman/hw" component={route.Hw} />
      <Route exact={true} path="/toliman" component={route.Home} />
      <Redirect to="/toliman" />
    </Switch>
  );
};

export default AppRoutes;
