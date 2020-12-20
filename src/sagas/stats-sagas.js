import { takeEvery, all, call, put } from 'redux-saga/effects';

import { IMAGES_TYPES, IMAGES_STATS } from '../actions';
import { loadStatsStart, loadStatsSuccess, loadStatsFail } from '../actions';

//worker saga
function* statsFetching({ images }) {
    yield put(loadStatsStart);
    console.log(images);
}

//watcher saga
function* statsLoadingStart() {
    yield takeEvery(IMAGES_TYPES.LOAD_SUCCESS, statsFetching);
}

export default function* statsSaga() {
    yield all([callI(statsLoadingStart)]);
}
