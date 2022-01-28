import React from 'react';
import { Redirect, Route, Router, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const menuGlobal = [
  {
    id: 'index',
    pid: 0,
    name: 'home',
    path: '/',
    component: () => import('@/pages'),
  },
];

function RouterConfig({ history, app }: any) {
  return (
    <Router history={history}>
      <Switch>
        {menuGlobal.map(({ path, ...dynamics }, index) => (
          <Route key={index} path={path} exact component={(dynamic as any)({ app, ...dynamics })} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
