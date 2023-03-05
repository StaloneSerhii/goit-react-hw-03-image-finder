import React from 'react';
import { ImaageaItems } from 'components/ImageGalleryItem/ImageGalleryItem';

export const GaleryImg = ({ img }) => {


  return (
    <ul>
      <ImaageaItems propImg={img} />
    </ul>
  );
};
