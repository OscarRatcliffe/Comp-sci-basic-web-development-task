import React, {useState, useContext} from 'react';
import Lottie from 'react-lottie';
import $ from 'jquery';
import './App.css';
import { stat } from 'fs';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState(' ');

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

        if (data.sessionToken == -1) {

          seterror("Wrong username / Password")

        } else {

          document.cookie = `sessionToken=${data.sessionToken}`
          window.location.replace("/App");

        }

      },
      error: () => {

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
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={loginCheck}>Login</button>
        </form>

        <p id="ErrorText">{error}</p>

    </div>
  );
}

export default App;
