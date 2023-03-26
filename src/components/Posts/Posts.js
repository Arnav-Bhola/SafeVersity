import React, { useEffect, useState } from "react";
import { db } from "../../firebase_setup/firebase-config";
import { collection, getDocs } from "firebase/firestore";
// import Post from "./Post";
import Card from "../UI/Card";

import styles from "./Posts.module.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postsCollectionRef]);

  return (
    <div className={styles.list}>
      <h1 className={styles.header}>All Posts</h1>
      <Card>
        {posts.map((post) => (
          <div key={post.id}>
            <div className={styles.postTop}>
              <h2 className={styles.postTitle}>{post.Title}</h2>
              <h4 className={styles.postDate}>{post.Date}</h4>
            </div>
            <h4 className={styles.postType}>{post.Type}</h4>
            <p className={styles.postDesc}>{post.Description}</p>
            <hr></hr>
          </div>
        ))}

        <h2 className={styles.endHeader}>You have reached the end!</h2>
      </Card>
    </div>
  );
};

export default Posts;
