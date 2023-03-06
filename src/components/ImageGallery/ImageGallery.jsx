import React from 'react';
import PropTypes from 'prop-types';
import { ImaageaItems } from 'components/ImageGalleryItem/ImageGalleryItem';
import './galleryStyle.css'

export const GaleryImg = ({ img }) => {

  return (
    <ul className='ImageGallery'>
     {img.map(({ webformatURL, ...otherProps }, index) => (
          <ImaageaItems 
            image={webformatURL}
key={index}
            {...otherProps}
          ></ImaageaItems>
        ))}
    </ul>
  );
};

GaleryImg.prototype = {
  img: PropTypes.object.isRequired
}
