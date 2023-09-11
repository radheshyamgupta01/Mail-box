// import React, { useState, useContext } from 'react';
import { MyContext } from '../Contex/ContextApi';
import "./NewModal.css";
import React, { useState, useContext } from 'react';

// import {  faXmark} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function NewModal() {
  const ctx = useContext(MyContext);
  const [to, setTo] = useState('');
  const currentUser = localStorage.getItem("email");

  const [from, setFrom] = useState(currentUser);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState("")
  const [mailBody, setMailBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [vale,setvalue]=useState(0)

  const modifiedCurrentUser = currentUser.replace(/[@,.]/g, '');
  console.log(modifiedCurrentUser)
  const receipientUserEmail = to.replace(/[@,.]/g, " ")
  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const formattedDate = formatDate(new Date());



  const SendHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const emailData = {
      senderEmail: currentUser,
      receipientUser: to,
      subject: subject,
      mail: mailBody,
      date: formattedDate,
      readmail:false
    };

    // Send the email to the recipient's inbox
    fetch(
      `https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/inbox.json`,
      {
        method: 'post',
        body: JSON.stringify(emailData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
     
        }
        return res.json();
      })
      .then((body) => {
        console.log(body, "this is newmodal res");
      })
      .catch((e) => {
        alert(e);
      });

    // Send a copy of the email to the sender's "Sent" box
    fetch(
      `https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail.json`,
      {
        method: 'post',
        body: JSON.stringify(emailData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
         
        }
        return res.json();
      })
      .then((body) => {
        console.log(body);
      })
      .catch((e) => {
        alert(e);
      });

    setLoading(false);

    setTo('');
    setSubject('');


    // Clear input fields and close the modal
    setTo('');
    setFrom('');
    setMailBody("")
    ctx.toggleModal();
  };

  return (
    <div className="modal">


      {/*      
      <div > */}
      <form onSubmit={SendHandler} className="modal-content" >
        <div className="modal-content-child">

          <h5>Compose New Mail</h5>
          <button className="close-button" onClick={() => ctx.toggleModal()} >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            placeholder="Recipient's email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            placeholder="Your email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">Subject:</label>
          <input
            type="text"
            id="subject"
            placeholder="Your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group form-groupA">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Compose your message..."
            value={mailBody}
            onChange={(e) => setMailBody(e.target.value)}
          />
        </div>
        <button className="send-button" type="submit" >
          Send
        </button>
      </form>
      {loading && (
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Sending...</span>
          </div>
        </div>
      )}
      {/* </div> */}

    </div>
  );
}

export default NewModal;

//const buttonHandler = () => {
//   const arr=[]
//   const movieDetail = {
//     title: titleInputValue.current.value,
//     opening: openingTextValue.current.value,
//     releaseDate: releaseDateValue.current.value,
//   };
//   console.log(movieDetail);
//   fetch("https://movieapp-f46d7-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json", {
//     method: "post",
//     body: JSON.stringify(movieDetail), 
//     headers: {
//       "Content-Type": "application/json", 
//     },
//   }).then((res) => {
//     return res.json();
    
//   })
//   .then((body)=>{
//       setdata((prvData)=>[
//           ...prvData,{title:body.title,opening:body.opening,releaseDate:body.releaseDate}]
//        )
//        console.log(data)
//        alert("added succefully")
// })
//   .catch((err) => {
//     console.log(err);
//   });

//   titleInputValue.current.value = "";
//   openingTextValue.current.value = "";
//   releaseDateValue.current.value = "";
//   console.log(data,"this is data from backend")
  
// }

