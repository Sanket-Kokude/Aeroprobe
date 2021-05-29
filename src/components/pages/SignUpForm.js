import React,{ useState } from 'react';
import './AdminLogin.css';

function Loginform({login, error}) {
    const [details, setDetails] = useState({username:"", email:""});
    const submithandler = e =>{
        e.preventDefault();

        login(details);
    }
    return (
       <form onSubmit={submithandler}>
           <div className="form-inner">
             <h2>SignUp</h2>  
             { (error!== "") ? ( <div className="error">{error} </div>): ""}
             <div className="form-group">
                 <label htmlFor="username">Name:</label>
                 <input type="text" name="Username" id="username" onChange={e=>setDetails({...details, username: e.target.value})} value={details.username} />
             </div>
             <div className="form-group">
                 <label htmlFor="email">Email:</label>
                 <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
             </div>
             <div className="form-group"><input type="submit" value="SIGNUP" /></div>
             
           </div>
       </form>
    )
}

export default Loginform;
