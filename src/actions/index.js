import { IMAGES_TYPES } from '../types';

export const loadImagesStart = key => {
    return {
        type: IMAGES_TYPES.LOAD_START,
        payload: key,
    };
};

export const loadImagesSuccess = images => {
    return {
        type: IMAGES_TYPES.LOAD_SUCCESS,
        payload: images,
    };
};

export const loadImagesFail = error => {
    return {
        type: IMAGES_TYPES.LOAD_FAIL,
        payload: error,
    };
};
