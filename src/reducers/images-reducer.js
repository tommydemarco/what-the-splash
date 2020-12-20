import { IMAGES_TYPES } from '../types';

const INITIAL_STATE = {
    isLoading: false,
    images: [],
    error: null,
    page: 1,
};

const imagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGES_TYPES.LOAD_START:
            return {
                ...state,
                isLoading: true,
            };
        case IMAGES_TYPES.LOAD_SUCCESS:
            return {
                isLoading: false,
                images: [...state.images, ...action.payload],
                error: null,
            };
        case IMAGES_TYPES.LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default imagesReducer;
