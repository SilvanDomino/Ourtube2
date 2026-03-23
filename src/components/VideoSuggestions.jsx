import styles from "./videoSuggestions.module.css";
import imgHolder from "../assets/imgHolder.jpg";
import videoFile from "../assets/Nothing But Thieves - Overcome.mp4";
import { useVideoThumbnail } from "./GenerateThumbnail";

export function VideoSuggestions() {
  const thumbnail = useVideoThumbnail(videoFile);
  const video_info = [
    {
      url: thumbnail,
      title: "We Gave Yonna A Tour of The OSCS House!",
      creator: "Yugi2x Live",
      duur: "16:48",
    },
  ];

  const suggestion = video_info.map((item) => (
    <div className={styles.videoSuggestion}>
      <img src={item.url} className={styles.videoImg} />
      <div className={styles.videoDescription}>
        <div className={styles.videoTitle}>{item.title}</div>
        <div className={styles.videoUploader}>{item.creator}</div>
        <div className={styles.videoLength}>{item.duur}</div>
      </div>
    </div>
  ));

  return (
    <div className={styles.videoSuggestions}>
      {suggestion}
      {suggestion}
      {suggestion}
    </div>
  );
}
