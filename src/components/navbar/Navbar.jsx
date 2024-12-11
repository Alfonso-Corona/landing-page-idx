import Link from "next/link";
import Links from "./links/Links";
import "./navbar.module.css";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </nav>
  )
}

export default NavBar;