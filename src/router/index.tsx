import { Route, Switch, Router, Redirect } from 'dva/router';
import { RouterAPI } from 'dva';
import routes from './routes';

const DRouter = (props: RouterAPI | undefined): JSX.Element => (
  <Router history={props!.history}>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route}></Route>
      ))}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default DRouter;
