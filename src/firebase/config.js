import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAwJlMspm657xU_d6OoccczCL6Ar0Onhrk",
  authDomain: "newdashboard-12904.firebaseapp.com",
  projectId: "newdashboard-12904",
  storageBucket: "newdashboard-12904.appspot.com",
  messagingSenderId: "563587053386",
  appId: "1:563587053386:web:948c8d67aca7a9bf83b3b3"
};
initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
export {db,auth}