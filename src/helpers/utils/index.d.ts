import { DvaInstance, Model } from 'dva';

export type MakeModels = (app: DvaInstance, models: { [key: string]: Model }) => void;
