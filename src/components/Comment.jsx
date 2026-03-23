import { useState } from 'react';
import styles from './comment.module.css';

export function Comment({ username, timestamp, text, likes }) {
  const [vote, setVote] = useState(null);
  const [likeCount, setLikeCount] = useState(likes);

  function handleLike() {
    if (vote === 'up') {
      setVote(null);
      setLikeCount(likeCount - 1);
    } else {
      if (vote === 'down') setLikeCount(likeCount + 1);
      setVote('up');
      setLikeCount((c) => c + 1);
    }
  }

  function handleDislike() {
    if (vote === 'down') {
      setVote(null);
    } else {
      if (vote === 'up') setLikeCount(likeCount - 1);
      setVote('down');
    }
  }

  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>{username[1].toUpperCase()}</div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.username}>{username}</span>
          <span className={styles.timestamp}>{timestamp}</span>
        </div>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <button
            className={`${styles.actionBtn} ${vote === 'up' ? styles.active : ''}`}
            onClick={handleLike}
          >
            👍 {likeCount}
          </button>
          <button
            className={`${styles.actionBtn} ${vote === 'down' ? styles.active : ''}`}
            onClick={handleDislike}
          >
            👎
          </button>
          <button className={styles.replyBtn}>Reply</button>
        </div>
      </div>
    </div>
  );
}