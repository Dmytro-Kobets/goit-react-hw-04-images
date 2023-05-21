import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes, { object } from 'prop-types';

export const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <GalleryList className="gallery">
      {images.map(image => {
        const { id, webformatURL, largeImageURL } = image;

        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            handleImageClick={() => {
              handleImageClick(largeImageURL);
            }}
          ></ImageGalleryItem>
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object).isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
