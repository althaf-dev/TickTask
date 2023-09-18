import React, { useContext, useEffect } from 'react'
import DeletedTask from "./Components/DeletedTasks/DeletedTask";
import FinishedTasks from "./Components/FinishedTasks/FinishedTasks";
import ActiveTasks from "./Components/ActiveTasks/ActiveTasks";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import AlertBar from "./Components/Header/Alert/AlertBar";
import { Appcontext} from "./Appcontext";
import ReactLoading from 'react-loading'
import useFetch from './CustomeHooks/useFetch';
import { getAuth, onAuthStateChanged } from "firebase/auth";
function TodoApp() {

  const {dispatchTodos,setFetchError,setIsloading,Todo_URL,userName,setUname} = useContext(Appcontext);
  useFetch(dispatchTodos,setFetchError,setIsloading,Todo_URL,userName);
  
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      setUname(user.email);
    })
  },[setUname,userName]);
  return (
    <div className="container-fluid">
   
          <Header  />
          <AlertBar />
          <Main/>
      
        <div className="row mt-3">
          <div className="bg-header text-dark p-2 mt-5">Footer</div>
        </div>
      </div>
  )
}
function Main(){
  
  const {isloading} = useContext(Appcontext);
   return(
    <>{!isloading && <div className="row">
            <SideBar />
            <ActiveTasks />
            <FinishedTasks />
            <DeletedTask />
    </div>}
    {isloading && <div className=' row vh-100 ms-5 d-flex justify-content-center align-items-center p-5'>
      <ReactLoading type="spokes" color="#0000FF"
                    height={200} width={100} /></div>}
    </>
    
   )
}
export default TodoApp
