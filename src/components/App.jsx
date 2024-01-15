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
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true, isLoader: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false, isLoader: false });
  };

  render() {
    const { photos, isLoader, isOpen } = this.state;
    return (
      <MainContainer>
        <Searchbar />
        {photos && (
          <ImageGallery photos={photos} openModal={this.handleOpenModal} />
        )}

        <Button />

        {isLoader && <Loader />}
        {isOpen && <Modal close={this.handleCloseModal}></Modal>}
        {isLoader && <Loader />}
      </MainContainer>
    );
  }
}

//
//
//
//
//
//
//
//
// {/* <Searchbar onSubmit={this.handleFormSubmit} />
//       {photos && (
//         <ImageGallery photos={photos} openModal={this.handleOpenModal} />
//       )}
//       {totalPages > 1 && page < totalPages && !isLoader ? (
//         <Button onClick={this.handleClickButton} />
//       ) : (
//         ''
//       )}
//       {isLoader && <Loader />}
//       {isOpen && (
//         <Modal close={this.handleCloseModal}>
//           {isLoader && <Loader color="white" />}
//           <img
//             src={modalContent.src}
//             alt={modalContent.alt}
//             onLoad={this.handleToggleLoader}
//           />
//         </Modal>
//       )} */}

//
//
//
//
//
//
//

//  handleSearch = async (query) => {
//     try {
//       this.setState({ isLoader: true });
//       const photos = await getPhotos(query, this.state.page);
//       this.setState({ photos, page: 1, isLoader: false });
//     } catch (error) {
//       console.error('Error fetching photos:', error);
//       toast.error('Failed to fetch photos. Please try again.');
//       this.setState({ isLoader: false });
//     }
//   };

//   render() {
//     const { photos, isLoader, isOpen } = this.state;
//     return (
//       <MainContainer>
//         <Searchbar onSearch={this.handleSearch} />
//         {photos && (
//           <ImageGallery photos={photos} openModal={this.handleOpenModal} />
//         )}
//         <Button />

//         {isLoader && <Loader />}
//         {isOpen && <Modal close={this.handleCloseModal}></Modal>}
//         {isLoader && <Loader />}
//       </MainContainer>
//     );
//   }
// }
