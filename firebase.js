import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB_gHqW1XsXhAgTQH5tMgCijB0ZAvtGyY",
  authDomain: "flyrealty-2b566.firebaseapp.com",
  projectId: "flyrealty-2b566",
  storageBucket: "flyrealty-2b566.appspot.com",
  messagingSenderId: "1054031379817",
  appId: "1:1054031379817:web:6286f5e6568a1888aa11f8"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app);