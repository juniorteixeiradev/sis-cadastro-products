import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoVVbmuZjBQxp39jHexKkk5qm4dMOYSJw",
    authDomain: "crud-next-1efc9.firebaseapp.com",
    projectId: "crud-next-1efc9",
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;