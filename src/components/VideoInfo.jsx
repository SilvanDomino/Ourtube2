import styles from './videoInfo.module.css';

export function VideoInfo() {
  return (
    <div className={styles.videoInfo}>
      <h1 className={styles.videoTitle}>STOP NORMALIZING. THIS.</h1>

      <div className={styles.buttonHolder}>
        <img className={styles.profilePicture} src="src/assets/Someordinarygamers.webp" alt="" />

        <div className={styles.channelInfo}>
          <p className={styles.channelName}>SomeOrdinaryGamers</p>
          <p className={styles.channelSubs}>3,82 mln. abonnees</p>
        </div>

        <button className={styles.greyButton}>Lid worden</button>
        <button className={styles.button}>abonneren</button>

        <div className={styles.likeDislikeButton}>
          <img className={styles.likeIMG} src="src/assets/thumb_up_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          <p className={styles.likeCount}>7.4k</p>
          <img className={styles.likeIMG} src="src/assets/thumb_down_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="" />
        </div>

        <div className={styles.shareButton}>
          <img className={styles.shareIMG} src="src/assets/share_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          <p>Delen</p>
        </div>

        <div className={styles.moreButton}>
          <img className={styles.shareIMG} src="src/assets/more_horiz_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" alt="" />
        </div>

      </div>

      <div className={styles.description}>
        <p className={styles.stats}>121.956 Weergaven. 22 mrt 2026</p>
        <p className={styles.descriptionText}>Hello guys and gals, it's me Mutahar again! This time we take a look at what appears to be the feds now purchasing all your private data from shady brokers just to profile everything you do. Here's how you can file all the opt outs and not let them peek into your life. Thanks for watching!
          Like, Comment and Subscribe for more videos!<strong> ...meer</strong></p>
      </div>
    </div>
  );
};
