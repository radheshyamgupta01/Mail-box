import React from 'react'
import setting from "./setting.png"
import user from "./user.png"
import menu from "./menu.png"
import logo from "./logo.png"
import serch from "./serch-icon.png"
import "./Header.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleUser, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
export default function Header() {
  const history=useHistory()
  const logoutHandler=()=>{
    localStorage.removeItem("email")
    localStorage.removeItem("token")
history.push("/")
  }
  return (
    <div className="header-container">
<div className="div1">
  <img src={menu} className="img1" ></img>
  <img src={logo} className="img2"></img>
  
  
  </div>
<div className="div2">
 <div className="serch-div">

 <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
 <input placeholder="Serch mail"></input>
 </div>
  
</div>
<div className="div3">
<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
<FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>
  <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
 <button className="button-logout" onClick={logoutHandler}>Logout</button>
</div>
    </div>
  )
}
