import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Abount Us</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti nemo praesentium ipsum, inventore eos error id culpa odit perspiciatis eligendi, adipisci ipsam debitis totam recusandae quae voluptatibus odio! Nisi?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" fill className={styles.img} alt="about us"/>
      </div>
    </div>
  )
}

export default AboutPage;