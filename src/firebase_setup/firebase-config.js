// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "safeversity-c953d.firebaseapp.com",
  projectId: "safeversity-c953d",
  storageBucket: "safeversity-c953d.appspot.com",
  messagingSenderId: "121239982975",
  appId: "1:121239982975:web:1858d0123101790155004a",
  measurementId: "G-0ZHYEEYQP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
