// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "schedulex-7741f.firebaseapp.com",
  projectId: "schedulex-7741f",
  storageBucket: "schedulex-7741f.appspot.com", // ✅ Fixed Typo
  messagingSenderId: "586315980158",
  appId: "1:586315980158:web:623e3dfdc62bfda49ce72f",
  measurementId: "G-21LXPS4GSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Prevent analytics from running on the server
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
