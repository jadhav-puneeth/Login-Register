
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import axios from 'axios';
import Users from './components/Users'

function App() {
  const [toggle,settoggle]=useState("register")
  const [users, setUsers] = useState([]);
  const [userDisplay, setUserDisplay] = useState(false);

  function changetoggle(event){
    event.preventDefault();
    settoggle(toggle==="login"?"register":"login");
  }
  const getUser = (event) => {
    event.preventDefault();
    axios.get('http://localhost:9000/getUsers').then((res) => {
        setUsers(res.data);
        setUserDisplay(true);
    });
}
  if(toggle==="login"){
    return (
    <div className='app '>
          <div className="row container-fluid">
                <Login getUser={getUser} changetoggle={changetoggle}/> 
         </div>
          <div className='row usertable'>
            <Users users={users} userDisplay={userDisplay} />
          </div>
    </div>
    );
  }
  else{
    return(
      <div className='app '>
            <div className="row container-fluid">
                <Register getUser={getUser} changetoggle={changetoggle}/>
                <div className='usertable'>
                    <Users users={users} userDisplay={userDisplay} />
                </div>
              </div>
          </div>
      )
  }
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>