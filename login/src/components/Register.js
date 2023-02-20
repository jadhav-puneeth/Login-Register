import React,{useState} from "react";

import axios from 'axios';

export default function Register(props){
    const [user,setuser]=useState("")
    const [pass,setpass]=useState("")
    const [cpass,setcpass]=useState("")
    const [sub,setsub]=useState(false)
    const [err,seterr]=useState(false)

    let Clicked= (event)=>{
        event.preventDefault();
        if((user && pass && cpass && pass!==cpass) ){
            seterr(true);
        }
        else{
            let userdetails={name:user,pass:pass}
            axios.post('http://localhost:9000/register',userdetails).then(res=> alert(res.data.message))
            setsub(true);
            seterr(false);
        }

    }

    // React Validation
    const successMessage = () => {
        return (
            <div
            className="success"
            style={{
                display: sub ? '' : 'none',
            color:"orange",}}>
            <div ><b>{user} Successfully Registered!!</b></div>
          </div>
        );
      };
      const errorMessage = () => {
        return (
          <div
            style={{
              display: err ? '' : 'none',color:"red",
            }}>
                <b>Please enter correct details</b></div>

        );
      };
    return (
        <div >
        <div className="Registerform">
           <h1>Register</h1>
            <div className="messages">
                {errorMessage()}
            </div>
            <div>
                {successMessage()}
            </div>
                {/* <label  >Username</label> */}
                <br></br><input  type="text"  placeholder="Enter Username" value={user}  onChange={(event) => setuser(event.target.value)}></input>
                {/* <br></br><label >Password</label> */}
                <br></br><input type="Password"  value={pass} placeholder="Enter Password" required  onChange={(event) => setpass(event.target.value)}></input>
                {/* <br></br><label >Confirm Password</label> */}
                <br></br>
                <input  type="Password" placeholder="Confirm Password" value={cpass}   required  onChange={(event) => setcpass(event.target.value)} ></input>
                <br></br>
                <div>
                <span  className="my-2">Already Registered <a href="" onClick={props.changetoggle} style={{textDecoration:"none"}}>Log in</a></span>
                <br></br>
                {/* <a  href="/" onClick={props.getUser}> getUsers </a>                */}
                 </div>
                <button  className="btn btn-dark my-3" onClick={Clicked}>Register</button>
            </div>
            </div>
    )
}

