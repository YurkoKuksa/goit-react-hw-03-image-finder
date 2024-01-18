import React from 'react';
import { GalleryItem, Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photo, openModal }) => {
  return (
    <GalleryItem
      onClick={() =>
        openModal({
          src: photo.largeImageURL,
          alt: photo.tags,
        })
      }
    >
      <Picture src={photo.webformatURL} alt={photo.tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
