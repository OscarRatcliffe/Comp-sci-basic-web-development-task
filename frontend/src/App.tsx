import React, {useState, useContext} from 'react';
import Lottie from 'react-lottie';
import $ from 'jquery';
import './App.css';
import { stat } from 'fs';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function loginCheck() {

    $.ajax({
      url: 'http://localhost:4000/login',
      method: 'POST',

      data: {
        "username": username,
        "password": password
      },

      dataType: 'json',

      success: (data) => {

        document.cookie = `sessionToken=${data.sessionToken}`
        window.location.replace("/App");

      },
      error: () => {

        alert("Wrong username / Password")

      }
    })

  }

  if (document.cookie != "") {
    window.location.replace("/App");
  }


  return (

    
    <div className="App">

      <h2>LOGIN</h2>
      
      <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={loginCheck}>Login</button>
        </form>


    </div>
  );
}

export default App;
