import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../api/gallery';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { toast } from 'react-toastify';

import { MainContainer, NoPictures } from './App.styled';
export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: 1,
    isOpen: false,
    isLoadMore: false,
    isEmpty: false,
    currentImage: {},
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      getPhotos(query, page)
        .then(({ hits: results, totalHits: total }) => {
          if (!results.length) {
            this.setState({ isEmpty: true });

            return;
          }
          this.setState(prev => ({
            photos: [...prev.photos, ...results],
            isLoadMore: page < Math.ceil(total / 12),
          }));
          toast.info('Pictures were found!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          console.log('Updated photos:', results);
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, photos: [] });
  };

  hadleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = currentImage => {
    this.setState({ isOpen: true, currentImage });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false, currentImage: {} });
  };

  render() {
    const { photos, isLoadMore, isOpen, isEmpty, currentImage, isLoading } =
      this.state;
    return (
      <MainContainer hasPhotos={photos.length || isEmpty > 0}>
        <Searchbar onSubmit={this.handleSubmit} /> {isLoading && <Loader />}
        {photos.length > 0 && (
          <ImageGallery photos={photos} openModal={this.handleOpenModal} />
        )}
        {isEmpty && (
          <NoPictures>There are no pictures for your query</NoPictures>
        )}
        {isLoadMore && !isEmpty && (
          <Button type="button" onClick={this.hadleLoadMore} />
        )}
        {isOpen && (
          <Modal close={this.handleCloseModal}>
            <img src={currentImage.src} alt={currentImage.alt} width="70%" />
          </Modal>
        )}
      </MainContainer>
    );
  }
}

export default App;
