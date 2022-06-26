import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, sign } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY2BVGCnfTg5B6K-ro6gk4Q9BqDUD287Y",
  authDomain: "app-chat-7956f.firebaseapp.com",
  databaseURL: "https://app-chat-7956f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "app-chat-7956f",
  storageBucket: "app-chat-7956f.appspot.com",
  messagingSenderId: "108397736849",
  appId: "1:108397736849:web:603f8ba7dde98c4c9e6030",
  measurementId: "G-L9TZXFYETF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export {
    auth,
    googleProvider
}