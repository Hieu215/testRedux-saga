import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './erroReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer,
});
export default rootReducer;
