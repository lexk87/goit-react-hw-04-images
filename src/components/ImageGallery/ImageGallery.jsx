import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import { GalleryItem } from 'components';

export const ImageGallery = ({ images }) => {
    return (
        <GalleryList>
            {images.map(({ id, largeImageURL, tags, webformatURL }) => (
                <GalleryItem
                    key={id}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    webformatURL={webformatURL}
                />
            ))}
        </GalleryList>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};
