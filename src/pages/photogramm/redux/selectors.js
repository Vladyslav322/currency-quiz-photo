export const imagesSelector = (state) => state.photogramm.images;

export const filteredImagesSelector = (state) => state.photogramm.filteredImages;

export const searchedImagesSelector = (state) => state.photogramm.searchedImages;

export const categoriesSelector = (state) => state.photogramm.categories;

export const pageSelector = (state) => state.photogramm.page;

export const allDisplayedImagesSelector = (state) => {
    const filteredImages = filteredImagesSelector(state);
    const searchedImages = searchedImagesSelector(state);

    return filteredImages.filter((filterImage) => {
        return searchedImages.some((searchImage) => searchImage.id === filterImage.id);
    });
};

export const displayedImagesOnPageSelector = (limitImagesPerPage) => {
    return (state) => {
        const page = pageSelector(state);

        return allDisplayedImagesSelector(state)
            .slice((page - 1) * limitImagesPerPage, page * limitImagesPerPage);
    }
};
