import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNuRkewFaT2SfLwcOLQaqoTuL2KYa3xmE",
  authDomain: "react-todo-app-b4741.firebaseapp.com",
  projectId: "react-todo-app-b4741",
  storageBucket: "react-todo-app-b4741.appspot.com",
  messagingSenderId: "515438428282",
  appId: "1:515438428282:web:66763ffe0a87841833bbc3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
