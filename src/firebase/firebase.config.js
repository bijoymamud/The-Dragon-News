// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClpZckoJDWMcAKNGLPXgCY8F1E8mRrh78",
    authDomain: "the-news-dragon-2a4e5.firebaseapp.com",
    projectId: "the-news-dragon-2a4e5",
    storageBucket: "the-news-dragon-2a4e5.appspot.com",
    messagingSenderId: "286478353885",
    appId: "1:286478353885:web:049c87b0c91cb056076234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;