import React from 'react';

export const GaleryImg = ({ img }) => {
console.log(img);
  return (
    <ul>
      {img.map(item => {
        return<img src={item.largeImageURL} alt='asd' width='400px'/>
      })}
    </ul>
  );
};
