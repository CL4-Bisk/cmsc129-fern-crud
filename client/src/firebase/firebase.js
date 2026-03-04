import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,
  getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

// Client-side helper functions
export function signInAnonymouslyUser() {
  return signInAnonymously(auth);
};

export function onAuthStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
};

export function getCurrentUser() {
  return auth.currentUser;
};

export const addBuildtoFirebase = (build) => {
  return addDoc(collection(db, "builds"), build);
};

export const getBuildsFromFirebase = () => {
  return getDocs(collection(db, "builds"));
};

export const getBuildById = (buildId) => {
  return getDoc(doc(db, "builds", buildId));
};

export const updateBuildInFirebase = (buildId, updatedData) => {
  const buildRef = doc(db, "builds", buildId);
  return updateDoc(buildRef, updatedData);
};

export const deleteBuildFromFirebase = (buildId) => {
  const buildRef = doc(db, "builds", buildId);
  return deleteDoc(buildRef);
};