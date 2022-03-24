// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIcnfv6Pcecqd4L2w38VRla0B0h4hRPOA",
    authDomain: "storefront-dashboard-21366.firebaseapp.com",
    databaseURL:
        "https://storefront-dashboard-21366-default-rtdb.firebaseio.com",
    projectId: "storefront-dashboard-21366",
    storageBucket: "storefront-dashboard-21366.appspot.com",
    messagingSenderId: "651829763160",
    appId: "1:651829763160:web:06988f7d3fd6378d33fe2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {auth, db}