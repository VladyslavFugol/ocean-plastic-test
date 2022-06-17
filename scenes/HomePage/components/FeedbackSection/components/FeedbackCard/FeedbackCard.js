import Image from 'next/image'
import styles from './FeedbackCard.module.scss'

function FeedbackCard({ children, userName, userInfo, photo }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p>
          {children}
        </p>
      </div>
      <div className={styles.user}>
        <div className={styles.userImage}>
          <Image src={photo} />
        </div>
        <div>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.userInfo}>{userInfo}</div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard;
