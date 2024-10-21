import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-43aea.firebaseapp.com",
  projectId: "reactchat-43aea",
  storageBucket: "reactchat-43aea.appspot.com",
  messagingSenderId: "511149690548",
  appId: "1:511149690548:web:c3f1edac1238c6d25a11e1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

