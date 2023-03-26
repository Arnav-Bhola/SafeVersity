import React from "react";

import styles from "./fourzerofour.module.scss";
import { Link } from "react-router-dom";

const fourzerofour = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.head}>404</h1>
      <h2 className={styles.pnf}>Page Not Found</h2>
      <p className={styles.paragraph}>We cannot find the page you're looking for!</p>
      <Link
        className={styles.link}
        to='/'
      >
        Get back
      </Link>
    </div>
  );
};

export default fourzerofour;
