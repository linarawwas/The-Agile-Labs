"use client";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.site}>
      <div className={`wrap ${styles.row}`}>
        <a href="#hero" className={styles.wordmark} aria-label="The Agile Labs — home">
          <span className={styles.wordmarkFull}>The Agile Labs</span>
          <span className={styles.markMobile} aria-hidden="true">
            <svg height="22" width="auto" style={{ display: "block" }}>
              <use href="#A-mark" />
            </svg>
          </span>
        </a>
        <nav className={styles.siteNav}>
          <a href="#capabilities">Capabilities</a>
          <a href="#products">Work</a>
          <a href="#process">Process</a>
          <a href="#team">Team</a>
          <a href="#contact" className={styles.book}>Book a call</a>
        </nav>
      </div>
    </header>
  );
}
