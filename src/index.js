import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyBOcoNTT3Ijcq0yiADP4l-8Ogb9QptmFX4",
  authDomain: "coder-ecomerce.firebaseapp.com",
  projectId: "coder-ecomerce",
  storageBucket: "coder-ecomerce.appspot.com",
  messagingSenderId: "82237102249",
  appId: "1:82237102249:web:2b38c0e4010c9ef4b7b1b8"
});  
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT,
//   storageBucket: process.env.FIREBASE_STOBUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDER,
//   appId: process.env.FIREBASE_APPID,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
