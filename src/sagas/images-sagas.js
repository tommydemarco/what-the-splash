import { takeLatest, all, call, put } from 'redux-saga/effects';

import { loadImagesSuccess, loadImagesFail } from '../actions';

function* imageFetchStart() {
    yield takeLatest('LOAD_START', imageFetchAsync);
}

function* imageFetchAsync({ payload: { key, page = 1 } }) {
    try {
        const response = yield fetch(
            `https://api.unsplash.com/photos/?client_id=${key}&per_page=28&page=${page}`,
        );
        const responseData = yield response.json();
        yield put(loadImagesSuccess(responseData));
    } catch (error) {
        yield put(loadImagesFail(error.message));
    }
}
export default function* imagesSagas() {
    yield all([call(imageFetchStart)]);
}
