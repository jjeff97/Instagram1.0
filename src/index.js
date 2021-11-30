import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './Context/firebase';
import {firebase, FieldValue}  from './Lib/firebase';
import './Styles/app.css';

ReactDOM.render( 
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  
 document.getElementById('root')
 );

// client side rendered app: (cra)
  // -> database which is firebase
  // -> react-loading- skeleton
  // -> Tailwind

// architecture
  // -> components, constants, context, helpers, lib 
  // (firebase is going to live in here), services(firebase functions in here)
  //-> STYLE (TAILwind)