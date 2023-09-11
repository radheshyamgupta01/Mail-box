import React,{useContext, useState} from 'react'
import "./Drafts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../Contex/ContextApi';
function Drafts() {
  const ctx=useContext(MyContext)
  
  const drafsHandler=()=>{
    ctx.DisplayDrafts()
  }
  return (
    <div className="drafts" onClick={drafsHandler}>
      draft
  
      
      </div>
  )
}

export default Drafts