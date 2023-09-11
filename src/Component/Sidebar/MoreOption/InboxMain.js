//  import React,{useContext} from 'react'
//  import { MyContext } from '../../Contex/ContextApi'

// function InboxMain() {
  
//   const [sentEmails, setSentEmails] = useState([]);

//   let currentUser = localStorage.getItem("email")
//   let modifiedCurrentUser = currentUser.replace(/[@,.]/g, "")
//   // Fetch sent emails from the backend and set them in the state
//   useEffect(() => {
//     fetch(`https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail.json`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Something went wrong");
//         }
//         return res.json();
//       })
//       .then((body) => {
//         let formatedData = [];
//         for( let key in body){
//           if (body[key].receipientUser == currentUser || body[key].senderEmail == currentUser) {
//          console.log("this is cheking")
//             let obj = {
//               date: body[key].date,
//               mail: body[key].mail,
//               receipientUser: body[key].receipientUser,
//               senderEmail: body[key].senderEmail,
//               subject: body[key].subject,
//               id: key
//             }
//             formatedData.push(obj)
//           }
         
//           setSentEmails(formatedData);
     
//         }
        
  
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
  
//  const ctx= useContext(MyContext)
//   const inbox=()=>{
//  ctx.displayInboxBox()
//   }
//   return (
//     <div className="drafts" onClick={inbox}>inbox</div>
//  )
//  }

// export default InboxMain


import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../Contex/ContextApi';

function InboxMain() {
  const [sentEmails, setSentEmails] = useState([]);
  const [emailCount, setEmailCount] = useState(0); // Initialize the count state

  let currentUser = localStorage.getItem("email");
  let modifiedCurrentUser = currentUser.replace(/[@,.]/g, "");

  // Fetch sent emails from the backend and set them in the state
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
        for (let key in body) {
          if (body[key].receipientUser === currentUser || body[key].senderEmail === currentUser) {
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
        }

        setSentEmails(formatedData);

        // Update the email count
        setEmailCount(formatedData.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    // Fetch emails initially
    fecthMail();

    // Set up a periodic fetch every 2 seconds
    const intervalId = setInterval(fecthMail, 2000);

    return () => {
      // Cleanup by clearing the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentUser]);


  const ctx = useContext(MyContext);

  const inbox = () => {
    ctx.displayInboxBox();
  }

  return (
    <div className="drafts" onClick={inbox}>
      Inbox ({emailCount}) {/* Display the email count */}
    </div>
  );
}

export default InboxMain;


