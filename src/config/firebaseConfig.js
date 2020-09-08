import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyByspi5j3_2QFm_0B0QQXYExtEbhvxbkkQ",
  authDomain: "net-ninja-marioplan-fc21f.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-fc21f.firebaseio.com",
  projectId: "net-ninja-marioplan-fc21f",
  storageBucket: "net-ninja-marioplan-fc21f.appspot.com",
  messagingSenderId: "81272261956",
  appId: "1:81272261956:web:e8c529f1dcfc05fefedb11",
  measurementId: "G-55Z4VSV5N0"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;