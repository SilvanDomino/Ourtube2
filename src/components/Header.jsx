import React from 'react';
import styles from './header.module.css';
import playIcon from '../assets/Youtube_logo.png';
import searchIcon from '../assets/search.png';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menu} aria-label="menu">☰</button>

        <div className={styles.logo}>
          <span className={styles.play}>
            <img src={playIcon} alt="Play logo" />
          </span>
          <span className={styles.brand}>Ourtube</span>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.search}>
          <input
            className={styles.input}
            placeholder="Search"
            aria-label="Search"
          />
          <button className={styles.searchBtn} aria-label="search">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>

       <button className={styles.loginBtn} aria-label="Inloggen">
          Inloggen
        </button>



      <div className={styles.right}>
        <button className={styles.moreBtn} aria-label="more options">
          <span className={styles.moreDot}></span>
          <span className={styles.moreDot}></span> 
          <span className={styles.moreDot}></span>
        </button>

      

        <span className={styles.rightDivider}></span>
      </div>
    </header>
  );
}