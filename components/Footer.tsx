import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`invert ${styles.site}`}>
      <div className="wrap">
        <div className={styles.row}>
          <div className={styles.left}>
            <a href="#hero" className={styles.wm} aria-label="The Agile Labs">
              The Agile Labs
            </a>
            <span className={`mono ${styles.built}`}>
              Built for businesses that take their operations seriously · Beirut
            </span>
          </div>
          <div className={styles.meta}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="mailto:info@theagilelabs.com">info@theagilelabs.com</a>
          </div>
        </div>
        <div className={`mono ${styles.copy}`}>
          © {year} The Agile Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
