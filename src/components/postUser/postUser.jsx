import styles from './postUser.module.css';

const getUserData = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}


const PostUser = async ({id}) => {
  const userData = await getUserData(id);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{userData.username}</span>
    </div>
  )
};

export default PostUser;