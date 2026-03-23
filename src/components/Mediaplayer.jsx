import styles from './mediaplayer.module.css';
import video1 from '../assets/NGYU.mp4';

export function Mediaplayer() {
  return (
    <div className={styles.mediaplayer}>
      <video className={styles.video} src={video1} controls></video>
    </div>
  );
};
