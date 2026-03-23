import { useEffect, useState } from 'react';

export function useVideoData(videoSrc) {
  const [thumbnail, setThumbnail] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (!videoSrc) return;

    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    video.src = videoSrc;
    video.muted = true;
    video.playsInline = true;

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, '0');
      return `${minutes}:${seconds}`;
    };

    const handleLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
      video.currentTime = 30;
    };

    const handleSeeked = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setThumbnail(canvas.toDataURL('image/jpeg'));
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [videoSrc]);

  return { thumbnail, duration };
}