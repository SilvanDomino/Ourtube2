import styles from './mediaplayer.module.css';
import video1 from '../assets/NGYU.mp4';

import { useRef, useState, useEffect } from 'react';

export function Mediaplayer() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function toggleFullscreen() {
    const player = videoRef.current.parentElement;

    if (!document.fullscreenElement) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  function handleTimeUpdate() {
    setProgress(videoRef.current.currentTime);
  }

  function handleLoadedMetadata() {
    setDuration(videoRef.current.duration);
  }

  function handleSeek(e) {
    const time = e.target.value;
    videoRef.current.currentTime = time;
    setProgress(time);
  }

  function handleVolume(e) {
    const vol = e.target.value;
    videoRef.current.volume = vol;
    setVolume(vol);
  }

  function formatTime(time) {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  useEffect(() => {
    const video = videoRef.current;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className={styles.mediaplayer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={video1}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className={styles.controlContainer}>

        {/* CENTER PLAY BUTTON */}
        <div className={styles.controls}>
          <button
            className={styles.playButton}
            onClick={togglePlay}
            type="button"
          >
            <div className={styles.buttonContent}>
              {!isPlaying ? (
                <span className={styles.playIcon} />
              ) : (
                <span className={styles.pauseIcon} />
              )}
            </div>
          </button>
        </div>

        <div className={styles.bottomControls}>

          <button onClick={togglePlay}>
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <span>
            {formatTime(progress)} / {formatTime(duration)}
          </span>

            🔊<input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            className={styles.volume}
          />

          <button
            onClick={toggleFullscreen}
            className={styles.fullscreenBtn}
          >
            {isFullscreen ? "🡼" : "⛶"}
          </button>

        </div>
      </div>

      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        step="0.1"
        onChange={handleSeek}
        className={styles.progress}
      />
    </div>
  );
}