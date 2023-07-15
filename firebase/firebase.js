import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoqOkUS2L-TB7-WzZQN7yeKzZZEWBlyHM",
    authDomain: "shad-chat-56f88.firebaseapp.com",
    projectId: "shad-chat-56f88",
    storageBucket: "shad-chat-56f88.appspot.com",
    messagingSenderId: "585890458878",
    appId: "1:585890458878:web:17253328e0a6b91d6c09af",
    measurementId: "G-F6YPSDLH66"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
