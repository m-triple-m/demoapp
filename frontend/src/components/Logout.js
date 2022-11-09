import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Logout = () => {

    const {loggedIn, setLoggedIn} = useContext(AppContext);

    const navigate = useNavigate();

  const logout = () => {
      //1. destroy session value
      sessionStorage.removeItem('user');

      // 2. setLoggedIn to false
      setLoggedIn(false);

      // 3. navigate to login page
      navigate('/login');
  }
  return (
    <div className='d-flex align-items-center justify-content-center vh-100 flex-column'>
        <p className='text-center display-1'>You Have Successfully Logged in!!</p>
        
        <button onClick={logout} className='btn btn-danger' >Logout</button>
    </div>
  )
}

export default Logout;