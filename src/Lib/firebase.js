import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//here is where seed file will be imported
import { seedDatabase } from '../seed';

const config = {
    
        apiKey: "AIzaSyARmMfhVkhWkENdR7VTSLU30cGF27we9f4",
        authDomain: "instagram1pnt0.firebaseapp.com",
        projectId: "instagram1pnt0",
        storageBucket: "instagram1pnt0.appspot.com",
        messagingSenderId: "1004352670694",
        appId: "1:1004352670694:web:7601e5c27605d2cad42427"
    
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where seed file will be called (ONCE!)
seedDatabase(firebase);


export  { firebase, FieldValue };
