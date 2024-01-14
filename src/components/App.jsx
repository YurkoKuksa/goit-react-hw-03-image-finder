import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from './api/gallery';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { toast } from 'react-toastify';

import { MainContainer } from './App.styled';
export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    loading: false,
    // error: null,
    // totalPhotos: 0,
    // isButtonShow: false,
    // isEmpty: false,
    // isLoadMore: false,
    // largeImageURL: '',
    totalPages: 1,
    isLoader: false,
    showModal: false,
    modalContent: {},
  };

  render() {
    const { photos, page, totalPages, isLoader, showModal, modalContent } =
      this.state;
    return (
      <MainContainer>
        <Searchbar />
        <ImageGallery />
        <Button />
        {<Loader />}
        <Modal>
          {<Loader />}
          <img src="" alt="" />
        </Modal>
      </MainContainer>
    );
  }
}
