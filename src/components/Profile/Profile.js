import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Profile.scss';

const Profile = ({ userProfile, goToAlbums }) => {
  const { name, picture, email, error, location } = userProfile;
  // TODO - use alternative default logo here
  const profileUrl = picture && picture.data ? picture.data.url : '';
  const address = (location && location.name) || '';
  if (error) {
    return (
      <div className='d-flex justify-content-center align-items-center user-profile-error'>
        <div className='alert alert-danger' role='alert'>
          Failed to load user profile
        </div>
      </div>
    );
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='card profile-card'>
        <img src={profileUrl} className='card-img-top img-thumbnail' alt='facebook profile photo' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <p className='card-text'>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              {` ${address}`}
            </p>
          </li>
          <li className='list-group-item'>
            <p className='card-text'>
              <FontAwesomeIcon icon={faEnvelope} />
              {` ${email}`}
            </p>
          </li>
        </ul>
        <div className='card-body'>
          <button type='button' onClick={goToAlbums} className=' btn btn-link card-link'>
            View Albums
          </button>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userProfile: PropTypes.shape({}),
  goToAlbums: PropTypes.func
};

PropTypes.defaultProps = {
  userProfile: {},
  goToAlbums: () => {}
};

export default Profile;
