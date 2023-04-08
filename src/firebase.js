import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAcSvfeY3Q8ma2K08y0Tdi_uWZTtdYfFXI",
  authDomain: "jcbose-b7555.firebaseapp.com",
  databaseURL: "https://jcbose-b7555-default-rtdb.firebaseio.com",
  projectId: "jcbose-b7555",
  storageBucket: "jcbose-b7555.appspot.com",
  messagingSenderId: "1081160045720",
  appId: "1:1081160045720:web:7530b2e069e6c36507aced",
  measurementId: "G-3XG308EL50"
});

export const auth = app.auth();
export const db = getFirestore();
export const storage = getStorage(app);
export default app;
