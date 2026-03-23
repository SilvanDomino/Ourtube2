import styles from './mediaplayer.module.css';
import video1 from '../assets/NGYU.mp4';

import { useRef, useState } from 'react';

export function Mediaplayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState(0);

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
          <button>prev</button>
          <button className={styles.playButton} onClick={togglePlay}>
            <div className={styles.buttonContent}>
              {!isPlaying? "▶︎" : "❚❚"}
            </div>
          </button>
          <button>next</button>
        </div>
      </div>
    </div>
  );
};