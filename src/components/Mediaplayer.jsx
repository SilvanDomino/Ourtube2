import styles from './mediaplayer.module.css';
import video1 from '../assets/NGYU.mp4';

import { useRef, useState } from 'react';

export function Mediaplayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay(){
    console.log("play/pause");
    if(isPlaying){
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={styles.mediaplayer}>
      <video ref={videoRef} className={styles.video} src={video1}></video>
      <div className={styles.controlContainer}>
        <div className={styles.controls}>
          <button type="button">{"<"}</button>
          <button className={styles.playButton} onClick={togglePlay} type="button">
            <div className={styles.buttonContent}>
              {!isPlaying ? (
                <span className={styles.playIcon} aria-hidden="true" />
              ) : (
                <span className={styles.pauseIcon} aria-hidden="true" />
              )}
            </div>
          </button>
          <button type="button">{">"}</button>
        </div>
        <div className={styles.bottomControls}>
          <button type="button">test</button>
        </div>
      </div>
    </div>
  );
};
