import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1pHK3CpFUhIo6V4j5VHjlbl2OK1A-HOY",
  authDomain: "butterflyeffect-41403.firebaseapp.com",
  databaseURL: "https://butterflyeffect-41403.firebaseio.com",
  projectId: "butterflyeffect-41403",
  storageBucket: "butterflyeffect-41403.appspot.com",
  messagingSenderId: "725347367921",
  appId: "1:725347367921:web:95b3cfdb400d61530ca250",
  measurementId: "G-L0P49BX3ZY"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export default firebase;