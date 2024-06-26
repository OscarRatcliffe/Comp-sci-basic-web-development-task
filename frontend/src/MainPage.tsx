import React, {useState, useContext} from 'react';
import $ from 'jquery';
import './App.css';

function Main() {

    function logOut() {
      document.cookie = "sessionToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      window.location.replace("/");
    }

    const [code, setCode] = useState("");

    $.ajax({
        url: `http://localhost:4000/code/${document.cookie.split("=")[1]}`,
        method: 'GET',
  
        dataType: 'JSON',
  
        success: (data) => {
  
            console.log(data.code)
            setCode(data.code)
  
        },
        error: () => {
  
          window.location.replace("/");
  
        }
      })

  return (
    <div className="App">

        <form>

            <h2>Your secret code is</h2>

            <h4>{code}</h4>

            
            <button onClick={logOut}>Log out</button>
        </form>

    </div>
  );
}

export default Main;
