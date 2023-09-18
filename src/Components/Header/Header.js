import React, { useContext } from 'react'
import "./Header.css";
import FIlterBar from '../Filter/FIlterBar'
import { HEADERTITLESTYLE, ERRORSTYLE, LOADINGSTYLE } from '../styles';
import { FaTriangleExclamation } from 'react-icons/fa6'
import { getDays } from '../../Utilities/Days';
import Search from './Search/Search';
import { Appcontext } from '../../Appcontext';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Title(props) {
  const { fetchError, isloading } = useContext(Appcontext);
  return (
    <div className={HEADERTITLESTYLE}>
      <h5>TO DO APP</h5>
      <p>hey! Today is {getDays}</p>
      {isloading && <p className={LOADINGSTYLE}>Loading Items....</p>}
      {fetchError && <p className={ERRORSTYLE}>
        <FaTriangleExclamation />{fetchError}</p>}
    </div>
  )
}
export function Filter() {
  return (
    <div className="text-dark mt-1 mb-0 ">
      <FIlterBar />
    </div>
  )
}
function Header(props) {
  const { userName,setIsloading } = useContext(Appcontext);
  const navigate = useNavigate();
  return (
    <div className="row bg-header mb-1 ">
      <Title />
      <Search />
      <div className="col-4 mt-1">
        <div className='ms-5 d-flex'>
          <p className='mt-3 ms-5'>{userName}</p>
          <p className='btn btn-secondary mt-2 ms-3'
            onClick={() => {
              const auth = getAuth();
              signOut(auth).then(() => {
                navigate("/TickTask/");
                setIsloading(true);
              }).catch((error) => {
                console.log(error.message)
              });
            }}>LOGOUT</p>
        </div>

      </div>
    </div>
  )
}

export default Header
