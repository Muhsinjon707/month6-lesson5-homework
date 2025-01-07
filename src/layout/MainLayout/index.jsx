import React from "react";
import styles from "./index.module.css";
import { Link, NavLink } from "react-router-dom"

function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">Muhsinjon.</Link>
        </div>
        <ul className={styles.nav}>
          <li className={styles.navElement}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navElement}>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Link to="/">Muhsinjon.</Link>
        </div>
        <ul className={styles.nav}>
          <li className={styles.navElement}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navElement}>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default MainLayout;
