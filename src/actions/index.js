import { IMAGES_TYPES } from '../types';

export const loadImagesStart = () => {
    return {
        type: IMAGES_TYPES.LOAD_START,
        payload: null,
    };
};

export const loadImagesStart = (images) => {
    return {
        type: IMAGES_TYPES.LOAD_SUCCESS,
        payload: images,
    };
};

export const loadImagesFail = (error) => {
    return {
        type: IMAGES_TYPES.LOAD_FAIL,
        payload: error,
    };
};