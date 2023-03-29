import { initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfkzDZSJV2AM0z7TYK_ebr-YKpJl1LNAo",
  authDomain: "fir-test-84da1.firebaseapp.com",
  projectId: "fir-test-84da1",
  storageBucket: "fir-test-84da1.appspot.com",
  messagingSenderId: "473490651024",
  appId: "1:473490651024:web:e047f37b1e168dc86b6515",
  measurementId: "G-YGQ25JQZSL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig, "CLIENT");
/* const analytics = getAnalytics(app); */
const auth = getAuth(app);

// setPersistence(auth, inMemoryPersistence);

export {
  app,
  auth,
}