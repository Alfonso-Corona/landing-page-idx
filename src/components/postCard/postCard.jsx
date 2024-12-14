import Link from 'next/link';
import styles from './postCard.module.css';
import Image from 'next/image';

const getPokemonInfo = async (pokemon) => {
  let pokemonInfo = pokemon.url.replace('pokemon', 'pokemon-species');
  const res = await fetch(pokemonInfo);
  if(!res.ok){
    throw new Error('can not get pokemon info')
  }
  /* let pokemonFlavor = res.json()
  .then((data) => {

  }); */
  return res.json()
    .then((data) => {
      //console.log(data);
      let flavor = data.flavor_text_entries.filter((pokemonData)=> pokemonData.language.name === 'es');
      return flavor[0];
    });
} 

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
        <Link className={styles.link} href='/blog/post'>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard;