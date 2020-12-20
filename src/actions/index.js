import { IMAGES_TYPES, IMAGES_STATS } from '../types';

export const loadImagesStart = (key, page) => {
    return {
        type: IMAGES_TYPES.LOAD_START,
        payload: { key, page },
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

export const loadStatsStart = () => {
    return {
        type: IMAGES_STATS.LOAD_START,
    };
};

export const loadStatsSuccess = stats => {
    return {
        type: IMAGES_STATS.LOAD_START,
        payload: stats,
    };
};

export const loadStatsFail = () => {
    return {
        type: IMAGES_STATS.LOAD_FAIL,
    };
};
