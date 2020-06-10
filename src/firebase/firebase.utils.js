import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5D-aKxbZYPbALDsdDwolqwRZ2SFW0bPw",
  authDomain: "e-commerce-react-4ee4d.firebaseapp.com",
  databaseURL: "https://e-commerce-react-4ee4d.firebaseio.com",
  projectId: "e-commerce-react-4ee4d",
  storageBucket: "e-commerce-react-4ee4d.appspot.com",
  messagingSenderId: "1051492961569",
  appId: "1:1051492961569:web:564a25d821f2b127a70260",
  measurementId: "G-ED3VZNZVW7",
};

export const creatUserProfileDocument = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShort = await userRef.get();
  if (!snapShort.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().getTime();
    try {
      console.log(email, additionalData);
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: " + error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
