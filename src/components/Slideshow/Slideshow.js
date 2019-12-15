import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Slideshow.scss';
class Slideshow extends React.Component {
  openSlideshow = albumId => {
    this.props.history.push(`/facebook-albums/albums/${albumId}/slideshow`);
  };

  render() {
    const { albumWithDetails } = this.props;
    // get album id from URL param
    const { match } = this.props;
    const {
      params: { albumId }
    } = match;
    const album = albumWithDetails[albumId];
    const data = (album && album.data) || [];
    // TODO - Figure out why carousal is not auto resuming on load even if data-ride='carousel' is set

    return (
      <div className='album-detail-container'>
        <div className='album-pictures-wrapper d-flex justify-content-center'>
          <div
            id='albumSlideshow'
            className='carousel slide'
            data-ride='carousel'
            data-interval='2000'>
            <ol class='carousel-indicators'>
              {data.map((albumPicture, i) => {
                return (
                  <li
                    data-target='#albumSlideshow'
                    data-slide-to={i}
                    className={`${i === 0 ? 'active' : ''}`}
                  />
                );
              })}
            </ol>
            <div className='carousel-inner'>
              {data.map((album, i) => {
                return (
                  <div className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img
                      className=' d-block w-100'
                      src={album.images[0].source}
                      alt='album picture'
                    />
                  </div>
                );
              })}
            </div>
            <a
              className='carousel-control-prev'
              href='#albumSlideshow'
              role='button'
              data-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#albumSlideshow'
              role='button'
              data-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albumWithDetails: state.albums
  };
};
export default withRouter(connect(mapStateToProps, null)(Slideshow));
