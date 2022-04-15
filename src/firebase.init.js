// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD8-4rxydnQ4bHYyupcYaF4k8d9KFmCFo",
  authDomain: "genius-car-service-5c922.firebaseapp.com",
  projectId: "genius-car-service-5c922",
  storageBucket: "genius-car-service-5c922.appspot.com",
  messagingSenderId: "9215264434",
  appId: "1:9215264434:web:0a67e6e8caef9f45956bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;