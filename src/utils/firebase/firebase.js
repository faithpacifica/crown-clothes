import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc, //retrieve document instance inside of firestore store
  getDoc,
  setDoc,
} from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, "usersnapshot");
  console.log(userSnapshot.exists());

  // if userData does not exists
  // create/ set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
 
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message, "error creating the user");
    }
  }



  //return userDocRef
  return userDocRef;
};
