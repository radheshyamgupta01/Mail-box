// MainContent.js

import React,{useEffect,useState,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons';
import Modal from "../Header/Compose/Modal"
import { ModalAction } from '../../Redux/modalSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import NewModal from '../Modal/NewModal';
import "./MainInbox.css"
import { Link } from "react-router-dom"
import {useContext} from "react";

import { MyContext } from "../Contex/ContextApi";
import { faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';
function MainContent() {
  const [itemdata, setItemData] = useState(() => {
    // Initialize itemdata from localStorage or an empty object if not found
    const storedItemData = localStorage.getItem('itemdata');
    return storedItemData ? JSON.parse(storedItemData) : {};
  });

const ctx=useContext(MyContext)
const [data, setData] = useState([]);
const currentUser = localStorage.getItem('email');

const modifiedCurrentUser = currentUser.replace(/[@,.]/g, '');
console.log(modifiedCurrentUser,"this  is modified user email")

const fecthMail=() => {
  fetch(`https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail.json`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((body) => {
      let formatedData = [];
      for( let key in body){
        if (body[key].receipientUser == currentUser || body[key].senderEmail == currentUser) {
    
          let obj = {
            date: body[key].date,
            mail: body[key].mail,
            receipientUser: body[key].receipientUser,
            senderEmail: body[key].senderEmail,
            subject: body[key].subject,
            id: key,
        
          }
          formatedData.push(obj)
        }
       
        setData(formatedData);
   
      }
      
   
   
    })
    .catch((error) => {
      console.error(error);
    });
  }
  useEffect(() => {
  
    fecthMail();

   
    const intervalId = setInterval(() => {
      fecthMail();
    }, 2000);

 
    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  // const updateReadStatus = (itemId) => {

  //    
  // };
 
  const updateReadStatus = (item,id) => {
    console.log(id,"this is id")
  
    const emailData = {
      senderEmail: item.senderEmail,
      receipientUser: item.receipientUser,
      subject: item.subject,
      mail: item.mail,
      date: item.date,
      readM:true,
    };
 
    const firebaseUrl = `https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail/${id}.json`;
  
    fetch(firebaseUrl, {
      method: "PUT", // Use PATCH to update a specific property
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData), // Update 'readM' to true
    })
      .then((res) => {
        if (res.ok) {
          // Successfully updated 'readM' property in Firebase
          // You can now update your component state or perform any other actions
          fecthMail();
          const updatedItemData = { ...itemdata, [id]: true };
          setItemData(updatedItemData);

          // Store updatedItemData in localStorage
          localStorage.setItem('itemdata', JSON.stringify(updatedItemData));

        
        } else {
          throw new Error('Something went wrong while updating in Firebase');
        }
      })
      .catch((error) => {
        console.error('Error updating in Firebase:', error);
      });
  };
  

const deleteHandler = (items) => {
  fetch(`https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail/${items}.json`, {
method: "DELETE",
headers: {
  "Content-Type": "application/json"
}
})
.then((res) => {
  if (res.ok) {
   
    return res.json();
  } else {
    throw new Error("Something went wrong while deleting the data");
  }
})
.then((body) => {
  let updatedData = data.filter((item) => item.id !== items);
  setData(updatedData);
})
.catch((err) => {
  console.error("Error deleting:", err);
});


}

  return (

    <div className="main-inbox">
  {ctx.isModalOpen && <NewModal></NewModal>}
  <table className="email-table">
    <thead className='thdata'>
      <tr>
        <th>Status</th>
        <th>To</th>
        <th>From</th>
        <th>Subject</th>
        <th>Mail</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
   
        <tr key={item.id} >
     
        
          
     <td>{itemdata[item.id] ? <h5 className='greend'></h5> : <h5 className='blue'></h5>}</td> 
          
          <td>{item.receipientUser}</td>
          
          <td>{item.senderEmail}</td>
          <td>{item.subject}</td>
          <td className="text-content">{item.mail}</td>
          <td>{item.date}</td>
          
          <td>
      
              <button className="green"   onClick={() => updateReadStatus(item,item.id)}> <Link to={`openmail/${item.id}`}>VIEW</Link></button>
            
          </td>
          <td>
              <button className="red" onClick={() => deleteHandler(item.id)}>
              DELETE
            </button>  
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
export default MainContent;


