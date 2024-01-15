import React from 'react';
import { GalleryItem, Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photo, openModal }) => {
  return (
    <GalleryItem
      onClick={() =>
        openModal({ src: photo.urls.regular, alt: photo.alt_description })
      }
    >
      <Picture src={photo.urls.small} alt={photo.alt_description} />
    </GalleryItem>
  );
};
export default ImageGalleryItem;
