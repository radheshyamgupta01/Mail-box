// src/MyContext.js
import { createContext, useState, useContext } from 'react';

 export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [sentBox,setsentBox]=useState(false)
  const [inbox,setInbox]=useState(true)
  const [drafts,setDrafts]=useState(false)
  const [allMail,setAllMail]=useState(false)
  const [openmail,setOpenMail]=useState(false)
  const openMailComponent=()=>{
    setsentBox(false)
    setDrafts(false)
    setInbox(false)
    setOpenMail(true)
    setAllMail(false)
  }
  const toggleModal=()=>{
    setIsModalOpen(!isModalOpen)
    setAllMail(false)
    setDrafts(false)
    setsentBox(false)
    setInbox(true)
  }

  const updateData = (newData) => {
    setData(newData);
  };
  const displayInboxBox=()=>{
    setsentBox(false)
    setInbox(true)
    setDrafts(false)
  }
  const displaySentBox=()=>{
    setsentBox(true)
    setDrafts(false)
    setInbox(false)
  }
  const DisplayDrafts=()=>{
    setDrafts(true)
    setsentBox(false)
    setInbox(false)
  }
const displayAllMail=()=>{
  setAllMail(true)
  setInbox(false)
  setDrafts(false)
  setsentBox(false)
  setOpenMail(false)
}

  return (
    <MyContext.Provider value={{ data, updateData ,isModalOpen,toggleModal,sentBox,displaySentBox,inbox,displayInboxBox,DisplayDrafts,drafts,allMail,displayAllMail,openmail,openMailComponent}}>
      {children}
    </MyContext.Provider>
  );
};



