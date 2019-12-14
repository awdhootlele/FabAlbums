import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import facebookAPI from '../../api/facebook';

import './Albums.scss';
import AlbumThumbnail from '../AlbumThumbnail/AlbumThumbnail';
import { getAlbumDetailsSuccess, getAlbumDetailsError } from '../../actions';
class Albums extends React.Component {
  goToAlbum = albumId => {
    const { albumsWithDetails } = this.props;
    // get album details via API only if we dont already have the album details
    if (!albumsWithDetails[albumId]) {
      facebookAPI.getAlbumDetails(albumId, response => {
        const { getAlbumDetailsSuccess, getAlbumDetailsError } = this.props;
        if (response.error) {
          getAlbumDetailsError();
        } else {
          getAlbumDetailsSuccess(response);
        }
      });
    }

    this.props.history.push(`/facebook-albums/albums/${albumId}`);
  };
  render() {
    const { albumsList, profileName } = this.props;
    return (
      <div className='albums-container d-flex justify-content-center'>
        {albumsList.map((album, index) => {
          return (
            <AlbumThumbnail
              key={index}
              album={album}
              goToAlbum={this.goToAlbum}
              profileName={profileName}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albumsList: state.userData.albums,
    albumsWithDetails: state.albums,
    profileName: state.userData.profile.name
  };
};
export default withRouter(
  connect(mapStateToProps, { getAlbumDetailsSuccess, getAlbumDetailsError })(Albums)
);
