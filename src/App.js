import React from "react";
import "./App.css";
import { db } from "./firebase_setup/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import FourZeroFour from "./components/fourzerofour/fourzerofour";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Support from "./components/Support/Support";
import Footer from "./components/Home/Footer";
import Posts from "./components/Posts/Posts";

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
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path=''
            element={<Home />}
          />
          <Route
            path='home'
            element={<Home />}
          />
          <Route
            path='post'
            element={<Form onSubmitHandler={addPost} />}
          />
          <Route
            path='support'
            element={<Support />}
          />
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='posts'
            element={<Posts />}
          />
          <Route
            path='*'
            element={<FourZeroFour />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

