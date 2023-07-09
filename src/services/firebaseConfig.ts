// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAucxAtX6sQhDkOOvonFbpy86v1OJOlZn8",
  authDomain: "game-list-12f3e.firebaseapp.com",
  projectId: "game-list-12f3e",
  storageBucket: "game-list-12f3e.appspot.com",
  messagingSenderId: "803389091590",
  appId: "1:803389091590:web:c3098f7c813e70e9f2b887",
  measurementId: "G-ZZEH8LQQ71"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)