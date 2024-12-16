import Link from 'next/link';
import styles from './postCard.module.css';
import Image from 'next/image';
import getPokemonInfo from '../../../utils/getDesc';

const PostCard = async ({pokemon, index}) => {
  const flavorText = await getPokemonInfo(pokemon);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} alt='' fill className={styles.img}/>
        </div>
        <p className={styles.date}>01.01.2024</p>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <p className={styles.desc}>
          {flavorText.flavor_text}
        </p>
        <Link className={styles.link} href={`/blog/${index}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard;