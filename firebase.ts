// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACgIcnWJbp_uPnIEXCdYvk08yHm5WpHnU",
    authDomain: "guiding-bee.firebaseapp.com",
    projectId: "guiding-bee",
    storageBucket: "guiding-bee.appspot.com",
    messagingSenderId: "1039333371541",
    appId: "1:1039333371541:web:f3fdc907b06891f4acf59c",
    measurementId: "G-ETGJ73JRSQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);