import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBU-u-QH7o_s89w0eXQr4LO8LHRQ-wbcsU",
    authDomain: "elitebridge-4b37d.firebaseapp.com",
    projectId: "elitebridge-4b37d",
    storageBucket: "elitebridge-4b37d.appspot.com",
    messagingSenderId: "819115024093",
    appId: "1:819115024093:web:ea1671a9d9dbfe30908534",
    measurementId: "G-Q5VSTMF4G8"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();   
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const analytics = firebase.analytics();
  
 
  export{auth, provider, storage , analytics};  
  export default db;