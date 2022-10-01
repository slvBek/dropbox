import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfCFS9Aozib2vTCRyuzDAOe32K9H7oBIY",
    authDomain: "dropbox-3dd07.firebaseapp.com",
    projectId: "dropbox-3dd07",
    storageBucket: "dropbox-3dd07.appspot.com",
    messagingSenderId: "362458055939",
    appId: "1:362458055939:web:3799b0033c7c63bbf1d536"
  };
  
 
  const app = firebase.initializeApp(firebaseConfig);

  export default app;  