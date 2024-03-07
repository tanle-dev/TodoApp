import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNcpMn9IXutFaIrbGjd7DI4tzFktjCkhI",
  authDomain: "todoapp-react-baa90.firebaseapp.com",
  projectId: "todoapp-react-baa90",
  storageBucket: "todoapp-react-baa90.appspot.com",
  messagingSenderId: "686463792013",
  appId: "1:686463792013:web:7c5ce9010f85beae8fc3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)