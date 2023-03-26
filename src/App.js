import React from "react";
import "./App.css";
import { db } from "./firebase_setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Form from "./components/Form/Form";
function App() {
  const postsCollectionRef = collection(db, "posts");

  const addPost = async (postTitle, postType, postDate, postDesc) => {
    await addDoc(postsCollectionRef, {
      Title: postTitle,
      Type: postType,
      Date: postDate,
      Description: postDesc,
    });
  };

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getPosts();
  // });
  return <Form onSubmitHandler={addPost} />;
}

export default App;

