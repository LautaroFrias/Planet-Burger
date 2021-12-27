import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_9OUT1Svqd1zyJzVTWfbAyjLqjjnEdfY",
  authDomain: "app-planet-burger-react.firebaseapp.com",
  projectId: "app-planet-burger-react",
  storageBucket: "app-planet-burger-react.appspot.com",
  messagingSenderId: "1016560207797",
  appId: "1:1016560207797:web:380ae622ca5b679fa27bfc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
