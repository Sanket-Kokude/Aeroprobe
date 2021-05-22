import React, { useState } from 'react';
import fire from '../../fire';
import Loginform from './SignUpForm';
import './AdminLogin.css';


function Adminlogin()
{
  const admin = {
    username: "admin",
    email: "admin123"
  };
 

const [user, setUser] = useState({username:"", email:""});
const [error, setError] = useState("");
const login = details => {
  // console.log(details);
  // if(details.username==admin.username && details.password==admin.password)
//  { console.log("logged in");
  setUser({
    username: details.username,
    email: details.email
  });
  var name = details.username;
  var email = details.email;
  console.log(name);
  console.log(email);
  let AqiRef = fire.database().ref('email').orderByKey().limitToLast(5);
  fire.database().ref('email').push(details);
  // else {
  //   console.log("wrong username/password");
  //   setError("wrong username/password");
  // }
}


const logout = () => {
  console.log("logout")
  setUser({username:"", email:""});

}

 
  return (
    <div className="Adminlogin">
      {(user.email !="") ? (
        <div className="welcome">
          <h1> You have successfully Signed Up <span>{user.name}</span></h1>

          <br/>
          <br/>
          <br/>
          {/* <button onClick={logout}> logout</button> */}
        </div>
      ): (
        <Loginform login={login} error={error} />
      )}
      
  {/* <h1 className='adminLogin'>Admin Login</h1>; */}
  <form ></form>
  </div>
  
  )
};
 
export default Adminlogin;