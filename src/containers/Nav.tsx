import Link from "next/link";
import { useRouter } from "next/router";

import styles from "styles/Layout.module.css";

export const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <a
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Counter
      </a>
      <a
        className={`${styles.link} ${
          pathname === "/accounts" ? styles.active : ""
        }`}
        href="/accounts"
      >
        Accounts
      </a>
    </nav>
  );
};
