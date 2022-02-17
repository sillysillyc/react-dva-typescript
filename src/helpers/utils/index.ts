import history from './history';
import { MakeModels } from './index.d';

export { history };

export const makeModels: MakeModels = (app, models) =>
  Object.keys(models).forEach((modelKey) => app.model(models[modelKey]));
