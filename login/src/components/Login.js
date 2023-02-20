import React, { useState } from "react";
import axios from "axios";

export default function Login(props){
    const [user,setuser]=useState("")
    const [pass,setpass]=useState("")
    const [lsub,setlsub]=useState(false)
    const [lerr,setlerr]=useState(false)

    let Clicked= (event)=>{
        event.preventDefault();
        let userdetails={name:user,pass:pass}
        axios.post('http://localhost:9000/login',userdetails).then(res=> alert(res.data.message))
        setlerr(false)
        setlsub(true)
    }
    const successMessage = () => {
        return (
            <div
            className="success"
            style={{
                display: lsub ? '' : 'none',color:"blue"
            }}>
            <b>Welcome {user}!!</b></div>
        );
      };
      const lerrorMessage = () => {
        return (
          <div
            style={{
              display: lerr ? '' : 'none'
            ,color:"red"}}>
            <b>Incorrect Username or Password</b>
            </div>
        );
      };
    return(
        <>  
            <div className="loginform ">
            <h2>Login</h2>
                <div className="messages">
                    {lerrorMessage()}
                </div>
                {/* <label>Username</label><br></br> */}
                <input  type="text" value={user}  placeholder="Enter Username" onChange={(event) => setuser(event.target.value)}/>
               {/* <br></br> <label >Password</label> */}
                <br></br><input type="password" value={pass}  placeholder="Enter Password" onChange={(event) => setpass(event.target.value)} />
                <br></br>
                
                <div>
                <span>Not a user? <a href="" onClick={props.changetoggle} style={{textDecoration:"none"}}>Register</a></span>
                <br></br>
                <a href="/" onClick={props.getUser}> getUsers </a>
                </div>
                <button className="btn btn-dark my-2"  onClick={Clicked} >Login</button>
                <div className="lmessages">
                    {successMessage()}
                </div>

            </div>
        </>
    )
}

