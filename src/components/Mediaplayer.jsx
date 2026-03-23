import styles from "./mediaplayer.module.css";
import video1 from "../assets/NGYU.mp4";
import video2 from "../assets/Nothing But Thieves - Overcome.mp4";
import video3 from "../assets/Twenty One Pilots - Next Semester.mp4";

import { useRef, useState } from "react";

const videos = [video1, video2, video3];

export function Mediaplayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  function togglePlay() {
    if (isPlaying) {
      console.log("pause");
      videoRef.current.pause();
    } else {
      console.log("play");
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function nextVideo() {
    console.log("next");
    setCurrentVideoIndex((index) => (index + 1) % videos.length);
    setIsPlaying(true);
  }

  function previousVideo() {
    console.log("prev");
    setCurrentVideoIndex(
      (index) => (index - 1 + videos.length) % videos.length,
    );
  }

  return (
    <div className={styles.mediaplayer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={videos[currentVideoIndex]}
        autoPlay
      ></video>
      <div className={styles.controlContainer}>
        <div className={styles.controls}>
          <button type="button" onClick={previousVideo}>
            {"<"}
          </button>
          <button
            className={styles.playButton}
            onClick={togglePlay}
            type="button"
          >
            <div className={styles.buttonContent}>
              {!isPlaying ? (
                <span className={styles.playIcon} aria-hidden="true" />
              ) : (
                <span className={styles.pauseIcon} aria-hidden="true" />
              )}
            </div>
          </button>
          <button type="button" onClick={nextVideo}>
            {">"}
          </button>
        </div>
        <div className={styles.bottomControls}>
          <button type="button">test</button>
        </div>
      </div>
    </div>
  );
}
