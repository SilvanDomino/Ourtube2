import styles from "./videoSuggestions.module.css";

export function VideoSuggestions() {
  const video_info = [
    {
      url: "https://i.ytimg.com/vi/KCMcS7cYYgU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBV7yAA5g7J8Vilch6ZNnuEYinoIQ",
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
      {suggestion}
    </div>
  );
}
