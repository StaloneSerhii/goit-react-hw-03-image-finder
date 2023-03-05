import React from 'react';
import { ImaageaItems } from 'components/ImageGalleryItem/ImageGalleryItem';
import './galleryStyle.css'

export const GaleryImg = ({ img }) => {


  return (
    <ul className='ImageGallery'>
      <ImaageaItems propImg={img} />
    </ul>
  );
};
