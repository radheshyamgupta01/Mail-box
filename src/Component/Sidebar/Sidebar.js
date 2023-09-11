import React ,{useState}from 'react'
import "./Sidebar.css"
import Compose from '../Header/Compose/Compose'
import Sent from './MoreOption/Sent'
import Drafts from './MoreOption/Drafts'
import More from './MoreOption/More'
import InboxMain from './MoreOption/InboxMain'
import AllMail from './MoreOption/AllMail'
function Sidebar() {

  return (
    <div className="sidebar">
      <Compose ></Compose>
      <InboxMain></InboxMain>
      <Sent></Sent>
      <AllMail></AllMail>

      <Drafts></Drafts>
      <More></More>
    </div>
  )
}

export default Sidebar