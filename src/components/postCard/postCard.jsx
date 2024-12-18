import Link from 'next/link';
import styles from './postCard.module.css';
import Image from 'next/image';
import getPokemonInfo from '../../../utils/getDesc';

const PostCard = async ({post}) => {
  //const flavorText = await getPokemonInfo(pokemon);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='' fill className={styles.img}/>
        </div>
        <p className={styles.date}>01.01.2024</p>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard;