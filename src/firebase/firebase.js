import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.firestore().settings.apply({ timestampsInSnapshots: true })

fetch('/__/firebase/init.json').then(async response => {
  firebase.initializeApp(await response.json());
});

export default firebase;