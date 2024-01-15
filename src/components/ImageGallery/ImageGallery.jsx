import React from 'react';
import { Ul } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <Ul>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo} openModal={openModal} />
      ))}
    </Ul>
  );
};

export default ImageGallery;
