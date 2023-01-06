import { actionsTypes } from './actions-types';

export const filterImages = (images) => ({
    type: actionsTypes.filterImages,
    images,
});

export const searchImages = (images) => ({
    type: actionsTypes.searchImages,
    images,
});

export const changeCurrentPage = (selectedPage) => ({
    type: actionsTypes.changeCurrentPage,
    selectedPage,
});
