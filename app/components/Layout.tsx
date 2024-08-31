// src/app/components/Layout.tsx
import React from 'react';
import Footer from './Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/">YourStreaming</a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navMenu}>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/series">Series</a></li>
            <li><a href="/drama">Drama</a></li>
            <li><a href="/netflix">Netflix</a></li>
            <li><a href="/amazon">Amazon</a></li>
          </ul>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Layout;

