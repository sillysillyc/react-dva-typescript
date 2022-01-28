import { FC } from 'react';
import { Router, Route, Switch } from 'dva/router';
import routes from './routes';
import { RouterAPI } from 'dva';

const RouterConfig: FC<RouterAPI> = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default RouterConfig;
