import Image from 'next/image';
import styles from './singlePostPage.module.css';

const SinglePostPage = ({params, searchParams}) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/122442/berries-blueberries-raspberries-fruit-122442.jpeg' alt='' fill className={styles.img}/>
      </div>
      <div className={styles.textCotainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src='https://images.pexels.com/photos/122442/berries-blueberries-raspberries-fruit-122442.jpeg' alt='' width={50} height={50} className={styles.avatar}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Ximena Nicole</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos illum eaque magni quas voluptatum quasi sit qui expedita magnam doloremque non, adipisci beatae, dolorem neque delectus temporibus a omnis?
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;