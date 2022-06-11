
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA5p8OSDEtMwLwMKW1TPNsvijH206GLl5k",
  authDomain: "registration-a2339.firebaseapp.com",
  projectId: "registration-a2339",
  storageBucket: "registration-a2339.appspot.com",
  messagingSenderId: "70492149788",
  appId: "1:70492149788:web:98aeed0ae16b4afdfc67d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();



// signup user

export async function signupUser (email, password){
    return createUserWithEmailAndPassword(auth, email, password)
    .then(data => {
        // console.log("user id :- ", data.user.uid)
       const id = data.user.uid;
        localStorage.setItem("uid",id)
        
    })
}




