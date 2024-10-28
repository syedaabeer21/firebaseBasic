// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjVmyOkskr2NG_Aj5NuwhEKq_psCNaK7k",
  authDomain: "productapp-dec2a.firebaseapp.com",
  projectId: "productapp-dec2a",
  storageBucket: "productapp-dec2a.appspot.com",
  messagingSenderId: "589976005845",
  appId: "1:589976005845:web:ae74e243055b87ab8ec65c",
  measurementId: "G-4KRS768HPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
