import { all, call } from 'redux-saga/effects';
import imagesSagas from './images-sagas';

export default function* rootSaga() {
    yield all([call(imagesSagas)]);
}
