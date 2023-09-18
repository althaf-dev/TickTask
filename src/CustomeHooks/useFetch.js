import { useContext, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import { Appcontext } from '../Appcontext';
export default function useFetch(dispatchTodos, setFetchError, setIsloading, API_URL,user) {

  const {userName} = useContext(Appcontext);
  useEffect(() => {
    const fetchItems = async () => {
      let todoArray = [];
      try {
        const querySnapshot = await getDocs(collection(db, userName));
        querySnapshot.forEach((doc) => {
          todoArray.push(doc.data());
        });
        setFetchError(null);
        dispatchTodos({ type: 'load', payload: todoArray});
      } catch (error) {
        console.log(error);
        setFetchError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 2000)

  }, [dispatchTodos, setFetchError, setIsloading, API_URL,userName])
}