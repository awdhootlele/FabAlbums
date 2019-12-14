import React from 'react';
import PropTypes from 'prop-types';

import './AlbumThumbnail.scss';

const AlbumThumbnail = ({ album, goToAlbum }) => {
  console.log('Album', album);
  const {name, id, cover_photo} = album;
  const picture = cover_photo && cover_photo.picture;
  console.log('ASKALSKLASKS', picture);
  

  return (
    <div className='card album-thumbnail-card p-2 m-2'>
      <img src={picture} className='card-img-top img-thumbnail album-thumbnail' alt='user album cover thumbnail' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

AlbumThumbnail.propTypes = {
  album: PropTypes.shape({}),
  goToAlbum: PropTypes.func
};

PropTypes.defaultProps = {
  album: {},
  goToAlbum: () => {}
};

export default AlbumThumbnail;
