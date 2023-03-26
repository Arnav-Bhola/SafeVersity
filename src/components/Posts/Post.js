import React from "react";

import styles from "./Post.module.scss";

const Post = (props) => {
  <div className={styles.box}>
    <div className={styles.info}>
      <h3 className={styles.title}>{props.title}</h3>
      <h4 className={styles["incident-type"]}>{props.type}</h4>
      <h5 className={styles.date}>{props.date}</h5>
    </div>
  </div>;
};

export default Post;
