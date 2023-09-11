import React,{useContext}from 'react'
import sent from "./Sent.png"
import "./Sent.css"
import { MyContext } from '../../Contex/ContextApi'
function Sent() {
  const ctx=useContext(MyContext)
  const sentBox=()=>{
    ctx.displaySentBox()
    
  }
  return (
  
    <div className="drafts"onClick={sentBox}>
    
    sent
    </div>
  )
}

export default Sent