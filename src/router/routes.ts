import { RouteProps } from './index.d';
import Home from '@/pages/Home';
import Test from '@/pages/Test';

const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/test',
    component: Test,
  },
];
export default routes;
