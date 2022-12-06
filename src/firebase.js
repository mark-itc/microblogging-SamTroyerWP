import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD50d7WwPbwFEvI2m8xkteu-ylBXNgbRDA",
  authDomain: "microblogging-app-9f93e.firebaseapp.com",
  projectId: "microblogging-app-9f93e",
  storageBucket: "microblogging-app-9f93e.appspot.com",
  messagingSenderId: "217898891957",
  appId: "1:217898891957:web:2dc05963c0b636e5b49cfc",
  measurementId: "G-PJLK888Q1L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
