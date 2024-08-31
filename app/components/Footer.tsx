import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <a href="/">YourStreaming</a>
        </div>
        <ul className={styles.footerMenu}>
          <li><a href="/">Movies</a></li>
          <li><a href="/">Series</a></li>
          <li><a href="/">Drama</a></li>
          <li><a href="/">Netflix</a></li>
          <li><a href="/">Amazon</a></li>
        </ul>
        <div className={styles.copyright}>
          <p>© 2024 YourStreaming. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


