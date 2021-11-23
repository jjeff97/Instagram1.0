import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( <App />, document.getElementById('root'));

// client side rendered app: (cra)
  // -> database which is firebase
  // -> react-loading- skeleton
  // -> Tailwind

// architecture
  // -> components, constants, context, helpers, lib 
  // (firebase is going to live in here), services(firebase functions in here)
  //-> STYLE (TAILwind)