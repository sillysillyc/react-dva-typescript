import dva from 'dva';
import createLoading from 'dva-loading';
import { makeModels, history } from '@/helpers/utils';
import { message } from 'antd';
import * as Models from '@/models';

import { BaseLayout } from '@/layouts';
import Router from '@/router';

// 创建应用
const app = dva({
  history,
  onError: (error, dispatch) => {
    message.error(error.message);
    console.log('error', error);
  },
});

app.use(createLoading());

// 注册model
makeModels(app, Models);

// 注册视图
app.router(Router);

// 启动应用
const App = app.start();

export default () => (
  <BaseLayout>
    <App />
  </BaseLayout>
);
