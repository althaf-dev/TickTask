import { db } from "./firebase/config";
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
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
  console.log(data);
  const Id = ''+id;
  await setDoc(doc(db,"althafangadimoger@gmail.com",Id),data);
}
export default apiRequest;