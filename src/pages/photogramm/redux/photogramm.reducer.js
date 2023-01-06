import { CATEGORIES, IMAGES } from '../constants';
import { actionsTypes } from './actionsTypes';

const initState = {
    images: IMAGES,
    filteredImages: IMAGES,
    searchedImages: IMAGES,
    categories: Object.values(CATEGORIES),
    page: 1,
};

function reducerPhotogramm(state = initState, action) {
    switch (action.type) {
        case actionsTypes.filterImages: {
            return {
                ...state,
                filteredImages: action.images,
            };
        }
        case actionsTypes.searchImages: {
            return {
                ...state,
                searchedImages: action.images,
            };
        }
        case actionsTypes.changeCurrentPage: {
            return {
                ...state,
                page: action.selectedPage,
            };
        }
        default:
            return state;
    }
}

export default reducerPhotogramm;
