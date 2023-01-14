
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBD3KgCSFPbVsxuPiQb6ML4-Jz_5kVRprk",
    authDomain: "foodapp-c53a5.firebaseapp.com",
    projectId: "foodapp-c53a5",
    storageBucket: "foodapp-c53a5.appspot.com",
    messagingSenderId: "257718699699",
    appId: "1:257718699699:web:fa47f3af00b4ee775692c6",
    measurementId: "G-FFR0VQTD48"
  };



if (!firebase.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};
  

  
  
  export const app = initializeApp(firebaseConfig);
 
  export const db = getFirestore(app);

  