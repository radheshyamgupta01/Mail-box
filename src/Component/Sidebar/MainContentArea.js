// import React,{useContext} from 'react'
// import "./MainContentArea.css"
// import Sidebar from './Sidebar'
// import MainContent from './MainContent'
// import LeftSidebar from './LeftSidebar'
// import { MyContext } from '../Contex/ContextApi'
// import SentBoxComponent from './SentBoxComponent'
// import DraftsBoxComponent from './DraftsBoxComponent'

// function MainContentArea(props) {
//   const ctx=useContext(MyContext)


//   return (
//     <div className="main-area-content">

//       <Sidebar className="sidebar-pannel"></Sidebar>
//    {ctx.inbox &&  !ctx.sentBox<MainContent && className="main-content-panel"></MainContent>}
//     {ctx.sentBox&&<SentBoxComponent></SentBoxComponent>}
//     {ctx.drafts&& <DraftsBoxComponent></DraftsBoxComponent>}

//       <LeftSidebar className="left-side-pannel"></LeftSidebar>


//     </div>
//   )
// }

// export default MainContentArea
import React, { useContext } from 'react';
import './MainContentArea.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import LeftSidebar from './LeftSidebar';
import { MyContext } from '../Contex/ContextApi';
import SentBoxComponent from './SentBoxComponent';
import DraftsBoxComponent from './DraftsBoxComponent';
import AllMailBoxComponent from './MoreOption/AllMailBoxComponent';

function MainContentArea(props) {
  const ctx = useContext(MyContext);

  return (
    <div className="main-area-content">
      <Sidebar className="sidebar-pannel"></Sidebar>
      {ctx.inbox && !ctx.sentBox && !ctx.drafts && (
        <MainContent className="main-content-panel"></MainContent>
      )}
      {ctx.sentBox && !ctx.inbox && !ctx.drafts && (
        <SentBoxComponent></SentBoxComponent>
      )}
      {ctx.drafts && !ctx.sentBox && !ctx.inbox && (
        <DraftsBoxComponent></DraftsBoxComponent>
      )}
      {ctx.openMail && !ctx.drafts && !ctx.sentBox && !ctx.inbox && (<AllMailBoxComponent></AllMailBoxComponent>)}
      {ctx.allmail && !ctx.drafts && !ctx.sentBox && !ctx.inbox && (<AllMailBoxComponent></AllMailBoxComponent>)}
      <LeftSidebar className="left-side-pannel"></LeftSidebar>
    </div>
  );
}

export default MainContentArea;
