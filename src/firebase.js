import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
 } from "firebase/auth";
import { Navigate } from "react-router-dom";

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
const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account'});

const db = getFirestore(app)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message)
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};