import { GalleryItem, GalleryPicture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, webformatURL, handleImageClick }) => {
  return (
    <GalleryItem className="gallery-item">
      <GalleryPicture
        id={`${id}`}
        src={webformatURL}
        alt=""
        onClick={handleImageClick}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
