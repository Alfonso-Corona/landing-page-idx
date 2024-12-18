import Image from 'next/image';
import { getUser } from '../../../utils/data';
import styles from './postUser.module.css';

const getUserData = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

const PostUser = async ({id}) => {
  //const userData = await getUserData(id);
  const user = await getUser(id);

  return (
    <div className={styles.container}>
      <Image src={user.img ? user.img : "/noavatar.png"} alt='' width={50} height={50} className={styles.avatar}/>
      <div className={styles.textContainer}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  )
};

export default PostUser;