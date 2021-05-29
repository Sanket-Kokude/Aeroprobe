import React, { useState, useEffect } from 'react';
import Loginform from './Loginform';
import './AdminLogin.css';
import '../HeroSection.css';
import ViewUsers from './ViewUsers';
import '../Navbar.css';
import { useHistory } from 'react-router-dom';


function Adminlogin()
{
  const admin = {
    username: "admin",
    password: "admin123"
  };
  let history = useHistory();

  const redirectAnswer = () => {
    history.push('/Answer')
  }
  const redirectViewUser = () => {
    history.push('/ViewUsers')
  }
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


const [user, setUser] = useState({username:"", password:""});
// const [error, setError] = useState("");
const login = details => {
  console.log(details);
  if(details.username===admin.username && details.password===admin.password){ 
    console.log("logged in");
    localStorage.setItem("adminstat",details.username);
    setUser({
      username: details.name,
      password: details.password
    });
}
  else {
    alert("wrong username/password");
    console.log("wrong username/password");
    // setError("wrong username/password");
  }
}
const logout = () => {
  console.log("logout")
  localStorage.removeItem("adminstat")
  setUser({username:"", password:""});

}

function viewuser() {
  return(<div>
    <ViewUsers/>
  </div>)
  
}

 
  return (
    <>
      {console.log("status: ",localStorage.getItem("adminstat"))}
      {(localStorage.getItem("adminstat") ==admin.username) ? (
        <div className="Adminlogin">
        <button className="Button2" onClick={redirectAnswer}>Answer</button>
        <button className="Button2" onClick={redirectViewUser}>View Users</button>
        <button className="Button2" onClick={logout}> Logout</button>
        </div>  
      ): ( <div className="Adminlogin">
         <Loginform login={login}  />
         </div>
      )}
      
  </>
  
  )
};
  
export default Adminlogin;