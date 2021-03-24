import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({src, image}) => {


  return (

    <video className="small-movie-card__player"
      src={src} poster={image}
      width="280" height="175"
      muted={true} autoPlay={true}/>

  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default VideoPlayer;
