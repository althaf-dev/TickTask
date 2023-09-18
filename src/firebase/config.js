import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCpxEOtlB4-z4PUqPdUkfa7mi6U_JqyW1I",
    authDomain: "todo-6af3f.firebaseapp.com",
    projectId: "todo-6af3f",
    storageBucket: "todo-6af3f.appspot.com",
    messagingSenderId: "983644019057",
    appId: "1:983644019057:web:7859bf73272a65fc283ed0",
    measurementId: "G-73QXV752G5"
  };
export const db = getFirestore(initializeApp(firebaseConfig));
// export const  postFirebase = async(data,Todo_URL)=>{



// }
export default initializeApp(firebaseConfig);