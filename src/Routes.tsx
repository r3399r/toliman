import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Edit: loadable(() => import('./pages/edit/Edit')),
  Child: loadable(() => import('./pages/child/Child')),
  Hw: loadable(() => import('./pages/hw/Hw')),
  Lecture: loadable(() => import('./pages/lecture/Lecture')),
  Bank: loadable(() => import('./pages/bank/Bank')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/toliman/child" component={route.Child} />
      <Route exact={true} path="/toliman/hw" component={route.Hw} />
      <Route exact={true} path="/toliman/lecture" component={route.Lecture} />
      <Route exact={true} path="/toliman/bank" component={route.Bank} />
      <Route exact={true} path="/toliman/edit" component={route.Edit} />
      <Route exact={true} path="/toliman" component={route.Home} />
      <Redirect to="/toliman" />
    </Switch>
  );
};

export default AppRoutes;
