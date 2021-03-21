import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({src, image}) => {
  const [, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current = document.createElement(`video`);
    videoRef.current.setAttribute(`src`, src);
    videoRef.current.muted = true;
    videoRef.current.poster = image;
    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    videoRef.current.onfocus = () => setIsPlaying(true);
    videoRef.current.focusout = () => setIsPlaying(false);

    return () => {
      videoRef.current.poster = null;
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onfocus = null;
      videoRef.current.focusout = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <video></video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default VideoPlayer;
