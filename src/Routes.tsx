import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Child: loadable(() => import('./pages/child/Child')),
  Hw: loadable(() => import('./pages/hw/Hw')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/child" component={route.Child} />
      <Route exact={true} path="/hw" component={route.Hw} />
      <Route exact={true} path="/" component={route.Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
