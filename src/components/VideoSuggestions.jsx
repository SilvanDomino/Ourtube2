import styles from "./videoSuggestions.module.css";
import imgHolder from "../assets/imgHolder.jpg";
import videoFile from "../assets/Nothing But Thieves - Overcome.mp4";
import { useVideoThumbnail } from "./GenerateThumbnail";

export function VideoSuggestions() {
  const thumbnail = useVideoThumbnail(videoFile);
  return (
    <div className={styles.videoSuggestions}>
      <div className={styles.videoSuggestion}>
        {thumbnail ? (
          <img src={thumbnail} className={styles.videoImg} />
        ) : (
          <div>Loading...</div>
        )}
        <div className={styles.videoDescription}>
          <div className={styles.videoTitle}>Title</div>
          <div className={styles.videoUploader}>Uploader</div>
          <div className={styles.videoLength}>00:00</div>
        </div>
      </div>
    </div>
  );
}
