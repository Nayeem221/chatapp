// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6N8SJffP57wSxObbpUhT7hDwQt88-v5o",
  authDomain: "chattingapp-47189.firebaseapp.com",
  projectId: "chattingapp-47189",
  storageBucket: "chattingapp-47189.firebasestorage.app",
  messagingSenderId: "1014809475734",
  appId: "1:1014809475734:web:b4bb953f15ef0880efe0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app