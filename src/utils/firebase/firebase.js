import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAWi1DCvJ9u1qDY9oFBSi-1ZGEjdWnnHs",
  authDomain: "crown-clothes-1d7c5.firebaseapp.com",
  projectId: "crown-clothes-1d7c5",
  storageBucket: "crown-clothes-1d7c5.firebasestorage.app",
  messagingSenderId: "540879080244",
  appId: "1:540879080244:web:edb9ea5bb554f981d4b361",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

