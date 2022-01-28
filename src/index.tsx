/**
 *  使用dva进行改造
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import dva from 'dva';
import routeConfig from './route';
import appModel from './models/';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import 'assets/styles/index.less';
import Empty from '@/components/Empty';
import createLoading from 'dva-loading';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import * as History from 'history';

const history = History.createBrowserHistory;
const location = history({
  basename: 'quick-dva',
});

// dva实例
const app = dva({
  history: location,
});
app.use(createLoading());
app.model(appModel);

app.router(routeConfig);

const App = app.start();
const renderEmpty = () => {
  return <Empty></Empty>;
};
ReactDOM.render(
  <ConfigProvider
    locale={zhCN}
    renderEmpty={renderEmpty}
    getPopupContainer={() => document.getElementById('root') || document.createElement('div')}
  >
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
