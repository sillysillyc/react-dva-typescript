import { message } from 'antd';
import { Model } from 'dva';

const defaultGlobalState = {};

const globalModel: Model = {
  namespace: 'global',
  state: defaultGlobalState,
  reducers: {
    add(state, { payload: todo }) {
      // 保存数据到 state
      return [...state, todo];
    },
  },
  effects: {
    *load() {
      // 使用trycatch dva的 onError无法捕获错误
      // try {
      console.log('load');
      // throw new Error('ffff');
      // } catch (error: any) {
      // message.error('----', error.message);
      // }
    },
    *save({ payload: todo }, { put, call }) {
      // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
      yield call(console.log, todo);
      yield put({ type: 'add', payload: todo });
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'load' });
        }
      });
    },
  },
};

export default globalModel;
