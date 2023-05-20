import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from '../services/API.js';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

// };

export const App = () => {
  // state = {
  //   images: [],
  //   searchQuery: '',
  //   isLoading: false,
  //   page: 1,
  //   selectedImageURL: '',
  //   isModalOpen: false,
  // };

  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImageURL, setSelectedImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setSearchQuery(e.target.searchQuery.value);
    setImages(await getImages(e.target.searchQuery.value));
    setIsLoading(false);
  };

  const handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  const handleLoadMore = async (e, prevState) => {
    const appendImages = await getImages(searchQuery, page + 1);
    setPage(page + 1);
    setImages([...images, ...appendImages]);
  };

  const handleImageClick = largeImageURL => {
    setSelectedImageURL(largeImageURL);
    setIsModalOpen(true);
  };

  const handleModalClose = e => {
    setIsModalOpen(false);
  };

  const handleEscape = e => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit}></Searchbar>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <ImageGallery
            images={images}
            handleImageClick={handleImageClick}
          ></ImageGallery>

          {images.length ? (
            <LoadMoreButton handleLoadMore={handleLoadMore}></LoadMoreButton>
          ) : null}
        </div>
      )}
      {isModalOpen ? (
        <Modal
          largeImageURL={selectedImageURL}
          handleModalClose={handleModalClose}
          handleEscape={handleEscape}
        ></Modal>
      ) : null}
    </div>
  );
};
