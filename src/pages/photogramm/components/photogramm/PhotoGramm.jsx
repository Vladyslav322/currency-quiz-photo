import Search from '../search/Search';
import ImagesGrid from '../images-grid/ImagesGrid';
import { Fragment, useEffect } from 'react';
import Filter from '../filter/Filter';
import classes from './PhotoGramm.module.scss';
import NotFound from '../not-found/NotFound';
import Pagination from '../pagination/Pagination';
import {
    allDisplayedImagesSelector,
    categoriesSelector,
    displayedImagesOnPageSelector,
    filteredImagesSelector,
    imagesSelector,
    pageSelector,
    searchedImagesSelector
} from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage, filterImages, searchImages } from '../../redux/actions';

const LIMIT_IMAGES_PER_PAGE = 10;

const PhotoGramm = () => {
    const dispatch = useDispatch();

    const categoriesValue = useSelector(categoriesSelector);
    const allImages = useSelector(imagesSelector);
    const allDisplayedImages = useSelector(allDisplayedImagesSelector);
    const displayedImagesPerPage = useSelector(displayedImagesOnPageSelector(LIMIT_IMAGES_PER_PAGE));

    const filteredImages = useSelector(filteredImagesSelector);
    const searchedImages = useSelector(searchedImagesSelector);
    const page = useSelector(pageSelector);

    const handleFilterImages = (images) => dispatch(filterImages(images));
    const handleSearchImages = (images) => dispatch(searchImages(images));
    const handleChangeCurrentPage = (selectedPage) => dispatch(changeCurrentPage(selectedPage));
    const imageSelector = (image) => image.categories;

    useEffect(() => {
        handleChangeCurrentPage(1);
    }, [filteredImages, searchedImages]);

    return (
        <div className={ classes.container }>
            <div className={ classes.filter }>
                <Filter
                    data={ allImages }
                    options={ categoriesValue }
                    selectorCallback={ imageSelector }
                    filterDataCallback={ handleFilterImages }
                />
            </div>

            <div className={ classes.grid }>
                <Search
                    data={ allImages }
                    selectorCallback={ imageSelector }
                    searchDataCallback={ handleSearchImages }
                />

                {
                    allImages.length && !displayedImagesPerPage.length
                        ? <NotFound text="Images are not found"/>
                        : (
                            <Fragment>
                                <div className={ classes.content }>
                                    <ImagesGrid images={ displayedImagesPerPage }/>
                                </div>

                                <Pagination
                                    totalCount={ allDisplayedImages.length }
                                    limit={ LIMIT_IMAGES_PER_PAGE }
                                    currentPage={ page }
                                    setPageCallback={ handleChangeCurrentPage }
                                />
                            </Fragment>
                        )
                }
            </div>
        </div>
    );
}

export default PhotoGramm;
