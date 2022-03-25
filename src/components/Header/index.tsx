import Image from "next/image";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="ig.news seu blog de tecnologia"
          width={200}
          height={200}
        />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
}
