import * as firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyATz5Wd-XJQpiMwbib7_cTLVbdLLqkcH2g",
    authDomain: "reports-a586c.firebaseapp.com",
    projectId: "reports-a586c",
    storageBucket: "reports-a586c.appspot.com",
    messagingSenderId: "512477899382",
    appId: "1:512477899382:web:12078d182db704b172cd57"
  };

 export const app = firebase.initializeApp(firebaseConfig);