import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
// import firebaseui from "firebaseui";

// const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};
firebase.initializeApp(config);

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// firebase.firestore().settings(settings);
firebase.firestore();
firebase.functions();
firebase.storage();
// firebase.auth();

export default firebase;
