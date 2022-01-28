import { RouteProps as DRouteProps } from 'dva/router';
import Main from '@/containers/main';

interface RouteProps extends DRouteProps {
  name: string;
}

const routes: RouteProps[] = [
  {
    name: 'home',
    path: '/',
    component: Main,
  },
];
export default routes;
