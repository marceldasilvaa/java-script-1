import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJULTxZKzpen53CJ9GC5_KwvDfQOVAJfU",
  authDomain: "miniblog-7e344.firebaseapp.com",
  projectId: "miniblog-7e344",
  storageBucket: "miniblog-7e344.firebasestorage.app",
  messagingSenderId: "1005884331555",
  appId: "1:1005884331555:web:d7490f3ea43cb8451ec396",
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export { db };
