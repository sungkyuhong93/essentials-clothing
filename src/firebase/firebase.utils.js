import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCuAy6fArgEg1pk1-N0sxqIgClcV70ZNyc",
  authDomain: "sungs-essentials.firebaseapp.com",
  databaseURL: "https://sungs-essentials.firebaseio.com",
  projectId: "sungs-essentials",
  storageBucket: "",
  messagingSenderId: "798206941098",
  appId: "1:798206941098:web:5448f49c2885b0a7217dd3",
  measurementId: "G-SWZ7Y7GZ94"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
