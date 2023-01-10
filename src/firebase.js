
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQMWdYFm11kSal192FgUkYj98aIs3qJuQ",
  authDomain: "chat-8fa01.firebaseapp.com",
  projectId: "chat-8fa01",
  storageBucket: "chat-8fa01.appspot.com",
  messagingSenderId: "718050228787",
  appId: "1:718050228787:web:62c22387301815eda90146"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()


