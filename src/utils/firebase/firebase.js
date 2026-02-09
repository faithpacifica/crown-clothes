import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from "firebase/auth";

import {
  getFirestore,
  doc, //retrieve document instance inside of firestore store
  getDoc,
  setDoc,
  collection, // to get collection reference
  writeBatch, // to perform batch writes
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey, // e.g. 'categories'
  objectsToAdd // array of objects we want to add
) => {
  const collectionRef = collection(db, collectionKey); // reference to collection firebase creates one if it does not exist
  const batch = writeBatch(db); //store each object inside of this new collection as a new document. transaction - successful a set of read and write operations on one or more documents. To perform multiple writes as a single atomic operation

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase()); //docRef bu degani document reference ichida collection 'categories' ichida har bir object uchun yangi document create qilamiz uning title asosida  e.g. 'hats'
    batch.set(docRef, object); //example: 'hats' docRef is the reference to that document inside of collection 'categories'  value is the object itself
  });

  await batch.commit();
  console.log("done");
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message, "error creating the user");
    }
  }

  //if user exists
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// Observer
export const onAuthStateChangedListener = (callback)=>{
  onAuthStateChanged(auth,callback)
}