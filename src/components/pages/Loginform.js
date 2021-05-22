import React,{ useState } from 'react';

function Loginform({login}) {
    const [details, setDetails] = useState({username:"", password:""});
    const submithandler = e =>{
        e.preventDefault();

        login(details);
    }
    return (
       <form onSubmit={submithandler}>
           <div className="form-inner">
             <h2>Login</h2>  
             {/* { (error!== "") ? ( <div className="error">{error} </div>): ""} */}
             <div className="form-group">
                 <label htmlFor="username">Username:</label>
                 <input type="text" name="Username" id="username" onChange={e=>setDetails({...details, username: e.target.value})} value={details.username} />
             </div>
             <div className="form-group">
                 <label htmlFor="password">Password:</label>
                 <input type="password" name="Password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
             </div>
             <div className="form-group">
             <input type="submit" value="LOGIN" />
           </div>
           </div>
       </form>
    )
}

export default Loginform
