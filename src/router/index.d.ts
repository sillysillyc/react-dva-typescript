import { RouteProps as RP } from 'dva/router';

export interface RouteProps extends RP {
  name?: string;
}
