import { takeLatest, all, call, put } from 'redux-saga/effects';

import { IMAGES_TYPES } from '../types';
import { loadStatsStart, loadStatsSuccess, loadStatsFail } from '../actions';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

//worker saga
export function* statsFetching({ payload }) {
    yield put(loadStatsStart());
    try {
        const stats = [];
        for (let i = 0; i < payload.length; i++) {
            const response = yield fetch(
                `https://api.unsplash.com/photos/${
                    payload[i].id
                }/statistics?client_id=${key}`,
            );
            const responseData = yield response.json();
            const objectStats = { ...responseData };
            yield stats.push(objectStats);
        }
        yield put(loadStatsSuccess(stats));
    } catch (error) {
        yield put(loadStatsFail);
    }
}

//watcher saga
function* statsLoadingStart() {
    yield takeLatest(IMAGES_TYPES.LOAD_SUCCESS, statsFetching);
}

export default function* statsSaga() {
    yield all([call(statsLoadingStart)]);
}
