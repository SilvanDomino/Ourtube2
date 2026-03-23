import styles from './mediaplayer.module.css';
import video1 from '../assets/NGYU.mp4';

import { useRef, useState } from 'react';

export function Mediaplayer() {

  const videoRef = useRef(null);

  return (
    <div ref={videoRef} className={styles.mediaplayer}>
      <video className={styles.video} src={video1} controls></video>
    </div>
  );
};
