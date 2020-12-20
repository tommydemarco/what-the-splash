import { combineReducers } from 'redux';

import imagesReducer from './images-reducer';
import statsReducer from './stats-reducer';

const rootReducer = combineReducers({
    images: imagesReducer,
    stats: statsReducer,
});

export default rootReducer;
