import { useEffect } from 'react';
import { Overlay, ModalWrapper, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';
export const Modal = ({ largeImageURL, handleModalClose, handleEscape }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  return (
    <Overlay
      className="overlay"
      onClick={handleModalClose}
      onKeyDown={handleEscape}
    >
      <ModalWrapper className="modal">
        <ModalImage src={largeImageURL} alt="" onKeyDown={handleEscape} />
      </ModalWrapper>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  handleEscape: PropTypes.func.isRequired,
};
