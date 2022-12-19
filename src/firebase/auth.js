// import firebase from "firebase/compat/app";
// import "firebase/auth"
// import { auth } from "../firebase";

// export const register = async ( { email, password } ) => {
//     const response = await firebase.auth()
//         .createUserWithEmailAndPassword(email, password);
//     return response.user;
// }

// export const login = async( { email, password } ) => {
//     const response = await firebase.auth()
//         .signInWithEmailAndPassword(email, password);
//     return response.user;
// }

// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth, provider } from "../firebase";
// import

// const googleHandler = async () => {
//     provider.setCustomParameters({ prompt: 'select_account' });
//     signInWithPopup(auth, provider)
//     .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result)
//         const token = credential.accessToken;
//         const user = result.user;
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//     })
// }