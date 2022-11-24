// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO_HvyOiGGkew_RgfYyNU7oqze8cEMuVA",
  authDomain: "fireblog-app-23c0d.firebaseapp.com",
  databaseURL: "https://fireblog-app-23c0d-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-23c0d",
  storageBucket: "fireblog-app-23c0d.appspot.com",
  messagingSenderId: "987434177819",
  appId: "1:987434177819:web:5a66fe3f19961b76c56fbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
