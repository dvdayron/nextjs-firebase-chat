'use client'
/*import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

console.log('api key', process.env.FIREBASE_API_KEY)

const firebaseConfig = {
    apiKey: "AIzaSyAQtlBoVoY04HPLQ95dSdD2n2qrrY4IR00",
    authDomain: "react-firebase-chat-demo-17653.firebaseapp.com",
    projectId: "react-firebase-chat-demo-17653",
    storageBucket: "react-firebase-chat-demo-17653.firebasestorage.app",
    messagingSenderId: "329028518147",
    appId: "1:329028518147:web:0742703dd7db736014a936"
}

const firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(firebase)
export const firestore = getFirestore(firebase)

export default firebase*/

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAQtlBoVoY04HPLQ95dSdD2n2qrrY4IR00",
    authDomain: "react-firebase-chat-demo-17653.firebaseapp.com",
    projectId: "react-firebase-chat-demo-17653",
    storageBucket: "react-firebase-chat-demo-17653.firebasestorage.app",
    messagingSenderId: "329028518147",
    appId: "1:329028518147:web:0742703dd7db736014a936"
}

firebase.initializeApp(firebaseConfig)
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase
