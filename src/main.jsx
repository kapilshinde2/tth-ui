import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFWnJjqV5kdE56XMEYGF3kjbfbM5HdtXg",
  authDomain: "ticket-tracking-hexagon.firebaseapp.com",
  projectId: "ticket-tracking-hexagon",
  storageBucket: "ticket-tracking-hexagon.appspot.com",
  messagingSenderId: "889402192855",
  appId: "1:889402192855:web:0cb12227dab6450384d192",
  measurementId: "G-ZW92D66DGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
