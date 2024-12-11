import Link from 'next/link';
import styles from './postCard.module.css';
import Image from 'next/image';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/122442/berries-blueberries-raspberries-fruit-122442.jpeg' alt='' fill className={styles.img}/>
        </div>
        <p className={styles.date}>01.01.2024</p>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident, ipsam error consequuntur quod earum. Ducimus alias impedit soluta repellat, quo, repellendus minus voluptatum quam libero qui recusandae deleniti. Similique.
        </p>
        <Link className={styles.link} href='/blog/post'>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard;