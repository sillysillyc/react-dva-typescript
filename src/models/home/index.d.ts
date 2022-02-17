import { Model } from 'dva';
import { BlogPropertiesI } from '@/services/test/index.d';

export interface HomeModel extends Model {}
export interface HomeState {
  blogs: BlogPropertiesI[];
}
