import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//here is where seed file will be imported

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where seed file will be called (ONCE!)
//seedDatabase(firebase);

export  { firebase, FieldValue };
