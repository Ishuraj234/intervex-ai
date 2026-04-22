
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interview-8ae09.firebaseapp.com",
//   projectId: "interview-8ae09",
//   storageBucket: "interview-8ae09.firebasestorage.app",
//   messagingSenderId: "1022574009932",
//   appId: "1:1022574009932:web:5cd51cbd881627570d1ee9"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()

// export {auth , provider}

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-8ae09.firebaseapp.com",
  projectId: "interview-8ae09",
  storageBucket: "interview-8ae09.firebasestorage.app",
  messagingSenderId: "1022574009932",
  appId: "1:1022574009932:web:5cd51cbd881627570d1ee9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const provider = new GoogleAuthProvider()

export {auth , provider}