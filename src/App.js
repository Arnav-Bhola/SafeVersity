import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase_setup/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(postsCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  });
  return (
    <div className='App'>
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;

