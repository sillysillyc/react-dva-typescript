import { getAllBlogsService } from '@/services/home';
import { HomeModel, HomeState } from './index.d';

const defaultGlobalState: HomeState = {
  blogs: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: defaultGlobalState,
  reducers: {
    queryBlogs(state,) {

    },
    add(state, { payload: todo }) {
      // 保存数据到 state
      return [...state, todo];
    },
  },
  effects: {
    *queryAllBlogs(payload, { call }) {
      const result = yield call(getAllBlogsService);
      console.log(result);

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
  //   subscriptions: {
  //     setup({ history, dispatch }) {
  //       // 监听 history 变化，当进入 `/` 时触发 `load` action
  //       return history.listen(({ pathname }) => {
  //         if (pathname === '/') {
  //           dispatch({ type: 'load' });
  //         }
  //       });
  //     },
  //   },
};

export default homeModel;
