"use client";

import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
]

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title}/>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{title:"Admin", path: "/admin"}}/>}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{title: "Login", path: "/login"}}/>
        )
      }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>MENU</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map(link => (
            <NavLinks item={link} key={link.title}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Links;