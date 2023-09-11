// MainContent.js

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons';
import Modal from "../Header/Compose/Modal"
import { ModalAction } from '../../Redux/modalSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import NewModal from '../Modal/NewModal';
import "./MainInbox.css"
import { useContext } from "react";
import { faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from "../Contex/ContextApi";
import { Link } from "react-router-dom"
function SentBoxComponent() {

  const [sentEmails, setSentEmails] = useState([]);

  let currentUser = localStorage.getItem("email")
  let modifiedCurrentUser = currentUser.replace(/[@,.]/g, "")
  // Fetch sent emails from the backend and set them in the state
  useEffect(() => {
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
         console.log("this is cheking")
            let obj = {
              date: body[key].date,
              mail: body[key].mail,
              receipientUser: body[key].receipientUser,
              senderEmail: body[key].senderEmail,
              subject: body[key].subject,
              id: key
            }
            formatedData.push(obj)
          }
         
          setSentEmails(formatedData);
     
        }
        
  
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  const deleteHandler = (items) => {
    fetch(`https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail/${items}.json`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
  })
  .then((res) => {
    if (res.ok) {
      alert("Deleted successfully");
      return res.json();
    } else {
      throw new Error("Something went wrong while deleting the data");
    }
  })
  .then((body) => {
    let updatedData = sentEmails.filter((item) => item.id !== items);
    setSentEmails(updatedData);
  })
  .catch((err) => {
    console.error("Error deleting:", err);
  });
  }
  return (
    // <div className="main-inbox">

    //   <table className="email-table">

    //     <tbody>
    //       {sentEmails.map((email, index) => (
    //         <tr key={index} >
    //           <div className="tr">
    //             {/* <td> <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon></td>
    //             <td> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></td> */}
    //             <td>To: {email.senderEmail}</td>
    //             <td>From:{email.receipientUser}</td>
    //             <td>Subject: {email.subject}</td>
              
    //             <td>{email.mail}</td>
    //             <td>Date: {email.date}</td>
    //             <td><button className="red" onClick={() => deleteHandler(email.id)}>DELETE</button></td>
    //           </div>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="main-inbox">
   
    <table className="email-table">
      <thead>
        <tr>
          <th>To</th>
          <th>From</th>
          <th>Subject</th>
          <th>Mail</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sentEmails.map((item) => (
          <tr key={item.id} >
             {/* <td>{itemdata[item.id] ? <h5 className='greend'></h5> : <h5 className='blue'></h5>}</td>  */}
              <td>{item.senderEmail}</td>
            <td>{item.receipientUser}</td>
          
            <td>{item.subject}</td>
            <td className="text-content">{item.mail}</td>
            <td>{item.date}</td>
            <td>
              <Link to={`/openmail/${item.id}`}>
                <button className="green">Read Mail</button>
              </Link>
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

export default SentBoxComponent;
