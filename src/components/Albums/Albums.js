import React from 'react';
import { connect } from 'react-redux';

import './Albums.scss';
import AlbumThumbnail from '../AlbumThumbnail/AlbumThumbnail';
class Albums extends React.Component {
  render() {
    const { albums } = this.props;
    return (
      <div className='albums-container d-flex justify-content-center'>
        {albums.map((album, index) => {
          return <AlbumThumbnail key={index} album={album} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.userData.albums
  };
};
export default connect(mapStateToProps, null)(Albums);
