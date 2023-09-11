import React, { useEffect, useState } from 'react';
import './Sign.css';
import { useHistory } from "react-router-dom";


function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const history= useHistory()
  var toggleForm = () => {
    setIsRegistering(!isRegistering);
  };
  const token=localStorage.getItem("email")
  // useEffect(()=>{
  //   if(token){

  //     setIsRegistering(true)
  //   }
  //   else{
  //     setIsRegistering(false)
  //   }
  // })
  var toggleFormA = () => {
    setIsRegistering(!isRegistering);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    let url = ""
    if (isRegistering) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCl7quWnIjXvgdrnPm9Omtj6StuHICobis"
    }
    else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCl7quWnIjXvgdrnPm9Omtj6StuHICobis"
    }
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {

throw new Error("something went wrong")
        }
        return res.json()
      }).then((body) => {
        console.log(body.idToken,"this is idtoken")
        localStorage.setItem("token",body.idToken)
        localStorage.setItem("email",email)

        alert("succesfull")
        history.push("/mainPage")
      }).catch((error) => {
        alert(error)
      })


  }
  return (
    <div className="sign-container">
      <form onSubmit={onSubmitHandler}>
        <h1>{isRegistering ? 'Register' : 'Login'}</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className="button">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <div className="para">
        <h4>
          {isRegistering ? (
            <>
              Already have an account?{' '}
              <span onClick={toggleFormA}>Login</span>
            </>
          ) : (
            <>

              <span className="forgot-password"> Forgot your password ? {' '}</span>
              <span onClick={toggleForm}>Sign</span>
            </>
          )}
        </h4>
      </div>

    </div>
  );
}

export default Sign;
