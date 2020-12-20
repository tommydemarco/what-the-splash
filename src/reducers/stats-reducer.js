import { IMAGES_STATS, IMAGES_TYPES } from '../types';

const INITIAL_STATE = {
    isLoading: false,
    stats: [],
    error: false,
};
const statsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGES_STATS.LOAD_START:
            return {
                ...state,
                isLoading: true,
            };
        case IMAGES_STATS.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                stats: [...state.stats, ...action.payload],
            };
        case IMAGES_STATS.LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default statsReducer;
