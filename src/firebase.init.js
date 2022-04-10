// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDV08_HpLjvrXw6v1xNgvqMBxUfuvG6Oo",
    authDomain: "ema-jhon-ecommarce.firebaseapp.com",
    projectId: "ema-jhon-ecommarce",
    storageBucket: "ema-jhon-ecommarce.appspot.com",
    messagingSenderId: "227265018776",
    appId: "1:227265018776:web:c03c9e46d3727a89c209ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;