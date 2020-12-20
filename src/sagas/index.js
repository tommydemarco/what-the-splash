
import { all, call } from 'redux-saga/effects';
import imagesSagas from './images-sagas';
import statsSaga from './stats-sagas';

export default function* rootSaga() {
    yield all([call(imagesSagas), call(statsSaga)]);
}
