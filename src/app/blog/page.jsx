//"use client";
import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '../../../utils/data';

const getData = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

const BlogPage = async () => {
  //const post = await getData();
  const posts = await getPosts();
  return (
    <div>
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage;