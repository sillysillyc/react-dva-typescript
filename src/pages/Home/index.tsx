import { connect } from 'dva';
import { Input } from 'antd';
import styles from './index.less';

const Home = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      home
      <Input />
    </div>
  );
};

export default connect((state: ConnectStateI) => {
  const a = state.loading.effects['global/load'];
  console.log(a);
  return {};
})(Home);
