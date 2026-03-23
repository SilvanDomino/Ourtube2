import styles from './commentList.module.css';
import { Comment } from './Comment';
import { comments } from '../data/comments';

export function CommentList() {
  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};