import Image from 'next/image';
import styles from './singlePostPage.module.css';
import getPokemonInfo from '../../../../utils/getDesc';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '../../../../utils/data';

export const generateMetadata = async ({params}) => {
  const slug = (await params).slug;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  }
};

const SinglePostPage = async ({params}) => {
  const slug = (await params).slug;

  //const flavorText = await getPokemonInfo(slug);
  const post = await getPost(slug);
  console.log("this", post.img);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt='' fill className={styles.img}/>
      </div>
      <div className={styles.textCotainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser id={post.userId}/>
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;