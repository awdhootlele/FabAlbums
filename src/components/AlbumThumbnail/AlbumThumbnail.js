import React from 'react';
import PropTypes from 'prop-types';

import './AlbumThumbnail.scss';

const AlbumThumbnail = ({ album, goToAlbum, profileName }) => {
  const {name, id, cover_photo} = album;
  const picture = cover_photo && cover_photo.picture;

  return (
    <div className='card album-thumbnail-card p-2 m-2'>
      <img src={picture} className='card-img-top img-thumbnail album-thumbnail' alt='user album cover thumbnail' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          This album - {name} was created by {profileName}
        </p>
        <button type="button" onClick={() => goToAlbum(id)} className='btn btn-primary'>
          View Album
        </button>
      </div>
    </div>
  );
};

AlbumThumbnail.propTypes = {
  album: PropTypes.shape({}),
  goToAlbum: PropTypes.func,
  profileName: PropTypes.string
};

PropTypes.defaultProps = {
  album: {},
  goToAlbum: () => {},
  profileName: ''
};

export default AlbumThumbnail;
