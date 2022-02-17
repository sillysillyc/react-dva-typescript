import { useEffect, Dispatch, FC } from 'react';

import { connect } from 'dva';
import { Input, Table } from 'antd';
import styles from './index.less';

interface IHomeProps {
  onQueryBlogs: () => void;
}

const Home: FC<IHomeProps> = ({ onQueryBlogs }) => {
  console.log(styles);

  useEffect(() => {
    console.log('sss');
    onQueryBlogs();
  }, []);

  return (
    <div className={styles.container}>
      home
      <Input />
    </div>
  );
};

export default connect(
  (state: ConnectStateI) => {
    const a = state.loading.effects['global/load'];
    console.log(a);
    return {};
  },
  (dispatch: Dispatch<any>) => ({
    onQueryBlogs: () =>
      dispatch({
        type: 'home/queryAllBlogs',
      }),
  }),
)(Home);
