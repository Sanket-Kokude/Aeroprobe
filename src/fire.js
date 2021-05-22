import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmq7Rs3W794BY_S2B39MY9CzfbqZief3U",
  authDomain: "aeroprobe-6ebaf.firebaseapp.com",
  databaseURL: "https://aeroprobe-6ebaf-default-rtdb.firebaseio.com",
  projectId: "aeroprobe-6ebaf",
  storageBucket: "aeroprobe-6ebaf.appspot.com",
  messagingSenderId: "498725520323",
  appId: "1:498725520323:web:b3ffe2738e565271527376",
  measurementId: "G-CXJE222JLJ"
};
var fire=firebase.initializeApp(firebaseConfig);

export default fire;
