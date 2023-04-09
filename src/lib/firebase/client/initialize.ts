import { PUBLIC_FIREBASE_CLIENT } from "$env/static/public";
import { initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";


// Initialize Firebase
console.log(JSON.parse(PUBLIC_FIREBASE_CLIENT));
const app = initializeApp(JSON.parse(PUBLIC_FIREBASE_CLIENT), "CLIENT");
/* const analytics = getAnalytics(app); */
const auth = getAuth(app);

// setPersistence(auth, inMemoryPersistence);

export {
    app,
    auth,
}