import React from 'react';

export const ImaageaItems = ({propImg}) => {
  return (
    <>
      {propImg.map(item => {
        return (
          <li  key={item.id}>
            <img src={item.largeImageURL} alt={item.tags} width="400px" />
          </li>
        );
      })}
    </>
  );
};
