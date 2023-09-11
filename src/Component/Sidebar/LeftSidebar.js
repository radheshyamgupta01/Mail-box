import React from 'react'
import "./LeftSidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faClipboard, faPlus, faSquareCheck, faUser } from '@fortawesome/free-solid-svg-icons'
function LeftSidebar() {
  return (
    <div className="left-sidebar">
      
     
      <div>
      <FontAwesomeIcon icon={faCalendarDay}> Calender</FontAwesomeIcon>
    
      </div>
      <div>
      <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
      
      </div>
    <div>
    <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
    
    </div>
     
     <div>
     <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
     
     </div>
      <div>
      <FontAwesomeIcon icon={faPlus} className="plus"></FontAwesomeIcon>
      
      </div>
      </div>
     
  )
}

export default LeftSidebar