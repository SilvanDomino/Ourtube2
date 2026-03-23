import styles from "./videoSuggestions.module.css";
import { useVideoData } from "./GenerateThumbnail";

export function VideoSuggestion({ title, uploader, src }) {
  const { thumbnail, duration } = useVideoData(src);

  return (
    <div className={styles.videoSuggestion}>
      {thumbnail ? (
        <img src={thumbnail} className={styles.videoImg} />
      ) : (
        <div className={styles.videoImg}>Loading...</div>
      )}

      <div className={styles.videoDescription}>
        <div className={styles.videoTitle}>{title}</div>
        <div className={styles.videoUploader}>{uploader}</div>
        <div className={styles.videoLength}>
          {duration || "00:00"}
        </div>
      </div>
    </div>
  );
}