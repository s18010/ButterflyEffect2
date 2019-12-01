import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = "configKeys"

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export default firebase;