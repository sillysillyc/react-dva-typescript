import { FC } from 'react';
import { history } from '@/helpers/utils';

const BaseLayout: FC<{}> = ({ children }) => {
  return (
    <div>
      Base Layout
      <div>
        <div onClick={() => history.push('/')}>Home</div>
        <div onClick={() => history.push('/test')}>Test</div>
      </div>
      {children}
    </div>
  );
};

export default BaseLayout;
