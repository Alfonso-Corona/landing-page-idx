"use client";

import Image from "next/image";
import styles from "./contanct.module.css";
//import HytradionTest from "@/components/hydrationTest";
import dynamic from "next/dynamic";

//const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false})

const ContactPage = () => {
  const q = Math.random();
  console.log(q);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill className={styles.img} alt="Contact Us" />
      </div>
      {/* <HydrationTestNoSSR/> */}
      <div suppressHydrationWarning>{q}</div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email adress" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;