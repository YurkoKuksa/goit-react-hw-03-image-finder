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
    isOpen: false,
    isLoadMore: false,
    isEmpty: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getPhotos(query, page).then(({ results, total }) => {
        if (!results.length) {
          this.setState({ isEmpty: true });
          return;
        }
        this.setState(prev => ({
          photos: [...prev.photos, ...results],
          isLoadMore: page < Math.ceil(total / 12),
        }));

        console.log('Updated photos:', results);
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, photos: [] });
  };

  hadleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true, isLoadMore: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false, isLoadMore: false });
  };

  render() {
    const { photos, isLoadMore, isOpen, isEmpty } = this.state;
    return (
      <MainContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        {photos && (
          <ImageGallery photos={photos} openModal={this.handleOpenModal} />
        )}
        {isEmpty && <p>There are no pictures for your query</p>}
        {isLoadMore && <Button type="button" onClick={this.hadleLoadMore} />}

        {isLoadMore && <Loader />}
        {isOpen && <Modal close={this.handleCloseModal}></Modal>}
        {!isLoadMore && isOpen && <Loader />}
      </MainContainer>
    );
  }
}
