import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>ACR</div>
      <div className={styles.text}>Copyright &copy; 2023</div>
    </footer>
  )
}

export default Footer;