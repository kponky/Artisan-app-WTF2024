import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import firebase from "firebase/compat/app";
// import firebase from 'firebase/app';
import "firebase/auth";
import AuthProvider from "./contexts/AuthContext.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyDlERnGuqrN5o8h2r0ehDuJtZqaQh5G7RI",
  authDomain: "artisan-project-2024.firebaseapp.com",
  projectId: "artisan-project-2024",
  storageBucket: "artisan-project-2024.appspot.com",
  messagingSenderId: "1051277312295",
  appId: "1:1051277312295:web:5f3ad389a1f9e1c3f22902",
  measurementId: "G-EHFC33D0MG",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
