import { getAuth } from "firebase/auth"
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoaReOBWk5dUg4NFvD8CVNRf7pfM_Zh28",
  authDomain: "electron-warehouse-management.firebaseapp.com",
  projectId: "electron-warehouse-management",
  storageBucket: "electron-warehouse-management.appspot.com",
  messagingSenderId: "1071820002582",
  appId: "1:1071820002582:web:1ca084a0c1d4b9a636ac37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;