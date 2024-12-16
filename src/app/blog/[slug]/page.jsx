import Image from 'next/image';
import styles from './singlePostPage.module.css';
import getPokemonInfo from '../../../../utils/getDesc';

const SinglePostPage = async ({params}) => {
  const slug = (await params).slug;

  const flavorText = await getPokemonInfo(slug);

  console.log(flavorText);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${slug}.png`} alt='' fill className={styles.img}/>
      </div>
      <div className={styles.textCotainer}>
        <h1 className={styles.title}>{flavorText.name}</h1>
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
          {flavorText.flavor_text}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;