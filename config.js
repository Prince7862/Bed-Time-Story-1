import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCKDioI9znw5Bpc6XiCpPHKCp7SRevZ1Ac",
    authDomain: "bed-time-stories-d4ae5.firebaseapp.com",
    projectId: "bed-time-stories-d4ae5",
    storageBucket: "bed-time-stories-d4ae5.appspot.com",
    messagingSenderId: "301038002818",
    appId: "1:301038002818:web:a1313c21b47f831bb98a9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();