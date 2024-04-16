
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCrpu1iklA2HkCkFBkBb4R4LIwlFCfpYqM",
    authDomain: "mass2-9f406.firebaseapp.com",
    databaseURL: "https://mass2-9f406-default-rtdb.firebaseio.com",
    projectId: "mass2-9f406",
    storageBucket: "mass2-9f406.appspot.com",
    messagingSenderId: "502145808027",
    appId: "1:502145808027:web:8c989a89d81f9b7838783e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
