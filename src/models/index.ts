import produce from 'immer';
import { getUserInfo } from '../api/users';

/**
 * 全局modal
 */
interface IBaseModal {
  user: { id?: string; nickname?: string };
}
const initialState: IBaseModal = {
  user: {},
};

export default {
  namespace: 'base',
  state: initialState,
  reducers: {
    save: produce((draft, action) => {
      draft = {
        ...draft,
        ...action.dispatch,
      };
      return draft;
    }),
  },
  effects: {
    *fetchUserInfo(payload, { call, put }) {
      const user = yield call(getUserInfo);
      yield put({
        type: 'save',
        payload: {
          user,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        dispatch({ type: 'fetchUserInfo' });
      });
    },
  },
};
