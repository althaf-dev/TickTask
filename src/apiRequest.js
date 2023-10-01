import { db } from "./firebase/config";
import { collection, addDoc,setDoc,doc,deleteDoc } from "firebase/firestore";
const apiRequest = async (url = ' ', options = null, errorMessage = null) => {

  try {

    const response = await fetch(url, options);
    if (!response.ok) {
      throw Error("Please Reload")
    }


  } catch (err) {

    errorMessage = err.message;
  } finally {

    return errorMessage;
  }
}


export const post = async (data,user) => {
  const id = ''+data.id
  try {
    await setDoc(doc(db, user,id),data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const patch = async (data, id) => {

  const Id = ''+id;
  await setDoc(doc(db,data.user,Id),data);
}

export const permenantDelete = async (data,id)=>{

  const Id = ''+id;
  await deleteDoc(doc(db,data.user,Id));
  
}
export default apiRequest;