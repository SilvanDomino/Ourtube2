import styles from './sidenav.module.css';
import { useState } from "react";

export function Sidenav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className={styles.sidenav}>
      <div className={styles.navigation}>

        <button className={styles.hamburger} onClick={toggleHamburger}>X</button>

        <ul className={`${styles.menu} ${hamburgerOpen ? styles.show : ''}`}>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>

      </div>
    </nav>
  );
}