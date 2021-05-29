import React, { useState } from 'react';
import fire from '../../fire';
import Loginform from './SignUpForm';
import './AdminLogin.css';


function Adminlogin()
{
const [user, setUser] = useState({username:"", email:""});
const login = details => {
  setUser({
    username: details.username,
    email: details.email
  });
  var name = details.username;
  var email = details.email;
  console.log(name);
  console.log(email);
  fire.database().ref('email').push(details);
}
  return (
    <div className="Adminlogin">
      {(user.email !=="") ? (
        <div className="welcome">
          <h1> You have successfully Signed Up <span>{user.name}</span></h1>

          <br/>
          <br/>
          <br/>
        </div>
      ): (
        <Loginform login={login}  />
      )}
  <form ></form>
  </div>
  
  )
};
 
export default Adminlogin;