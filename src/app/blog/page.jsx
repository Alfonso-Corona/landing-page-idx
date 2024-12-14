//"use client";
import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';

const getData = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

const BlogPage = async () => {
  const post = await getData();
  console.log(post);
  //const [counter, setCounter] = useState(0);

  /* function hanleClick() {
    setCounter(() => counter+20); console.log(counter);
  }
 */
  return (
    <div>
      <div className={styles.container}>
        {post.results.map((pokemon, index) => (
          <div className={styles.post} key={index}>
            <PostCard pokemon={pokemon} index={index+1}/>
          </div>
        ))}
      </div>
      <button className={styles.button}>Get more</button>
    </div>
  )
}

export default BlogPage;