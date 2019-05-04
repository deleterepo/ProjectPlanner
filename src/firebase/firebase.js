import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRcXq8418ULAFhZ1xBYO5pqBiu_LF6qG8",
    authDomain: "project-planner-c1384.firebaseapp.com",
    databaseURL: "https://project-planner-c1384.firebaseio.com",
    projectId: "project-planner-c1384",
    storageBucket: "project-planner-c1384.appspot.com",
    messagingSenderId: "122629424668",
    appId: "1:122629424668:web:0f6e607bcfdefb55"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;