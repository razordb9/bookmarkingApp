import { PUBLIC_FIREBASE_CLIENT } from "$env/static/public";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";


// Initialize Firebase
const config = {
  "apiKey": "AIzaSyBfkzDZSJV2AM0z7TYK_ebr-YKpJl1LNAo",
  "authDomain": "fir-test-84da1.firebaseapp.com",
  "projectId": "fir-test-o84da1",
  "storageBucket": "fir-test-84da1.appspot.com",
  "messagingSenderId": "473490651024",
  "appId": "1:473490651024:web:e047f37b1e168dc86b6515",
  "measurementId": "G-YGQ25JQZSL"
}

const app = initializeApp(config, "CLIENT");
const auth = getAuth(app);

export {
  app,
  auth,
}