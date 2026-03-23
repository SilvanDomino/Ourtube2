import { useEffect, useState } from 'react';

export function useVideoThumbnail(videoSrc) {
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.playsInline = true;

    const handleLoaded = () => {
      video.currentTime = 1;
    };

    const handleSeeked = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const image = canvas.toDataURL('image/jpeg');
      setThumbnail(image);
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [videoSrc]);

  return thumbnail;
}