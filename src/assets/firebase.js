import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmUn-nUtkZ9rS9EL6FrjP_FI0_oG2N9ck",
    authDomain: "clone-fd4c2.firebaseapp.com",
    databaseURL: "https://clone-fd4c2.firebaseio.com",
    projectId: "clone-fd4c2",
    storageBucket: "clone-fd4c2.appspot.com",
    messagingSenderId: "316481146336",
    appId: "1:316481146336:web:0837885d15e55d04d6ef85",
    measurementId: "G-W8FPK3B1D4"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth }
