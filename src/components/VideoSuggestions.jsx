import styles from "./videoSuggestions.module.css";
import { VideoSuggestion } from "./VideoSuggestion";
import video1 from "../assets/Nothing But Thieves - Overcome.mp4";
import video2 from "../assets/Twenty One Pilots - Next Semester.mp4";

export function VideoSuggestions() {
  const videos = [
    {
      title: "Overcome",
      uploader: "Nothing But Thieves",
      src: video1,
    },
    {
      title: "Next Semester",
      uploader: "Twenty One Pilots",
      src: video2,
    },
  ];

  return (
    <div className={styles.videoSuggestions}>
      {videos.map((video, index) => (
        <VideoSuggestion
          key={index}
          title={video.title}
          uploader={video.uploader}
          src={video.src}
        />
      ))}
    </div>
  );
}