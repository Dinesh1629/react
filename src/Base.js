import firebase from 'firebase';

const config = {
 

 apiKey: "AIzaSyBprL5n90cngR3K5J8qWSNDrGEqw9H8wAQ",
  authDomain: "fir-7998e.firebaseapp.com",
  projectId: "fir-7998e",
  storageBucket: "fir-7998e.appspot.com",
  messagingSenderId: "628081481252",
  appId: "1:628081481252:web:e9b85d1005b335d5416ab1"


};


firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();