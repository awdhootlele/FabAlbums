import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from "react-router-dom";

import './AlbumDetail.scss';
class AlbumDetail extends React.Component {
  
  render() {
    const { albumWithDetails } = this.props;
    // get album id from URL param
    const {match} = this.props;
    const {params: {albumId}} = match;
    const album = albumWithDetails[albumId];
    const data = album && album.data;
    // TODO - show image gallery and slideshow button to show slideshow in separate route
    // Note - make sure to load the first image in the container
    // data[0] -> 1st picture in an album
    //data[0].images[0] -> Higher resolution picture -> Make sure to use this in img tag
    return <div className='album-detail-container d-flex justify-content-center'>HELLO DETAIL (WIP)</div>;
  }
}

const mapStateToProps = state => {
  return {
    albumWithDetails: state.albums
  };
};
export default withRouter(connect(mapStateToProps, null)(AlbumDetail));
