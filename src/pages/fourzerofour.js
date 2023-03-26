import React from "react";

import styles from "./fourzerofour.module.scss";

const fourzerofour = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.head}>404</h1>
      <h2 className={styles.pnf}>Page Not Found</h2>
      <p className={styles.paragraph}>We cannot find the page you're looking for!</p>
      <a
        className={styles.link}
        href='#home'
      >
        Get back
      </a>
    </div>
  );
};

export default fourzerofour;
