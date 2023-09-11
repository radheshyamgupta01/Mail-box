// import React, { useEffect, useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// function AllMailBoxComponent() {
//   const [openMailData, setMailData] = useState([]);
//   const params = useParams();
//   const history = useHistory()
// console.log(params.id,"his  is param id")
//   useEffect(() => {
//     fetch(`https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail.json`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Something went wrong');
//         }
//         return res.json();
//       })
//       .then((body) => {
//         let formatedData = [];
//         for( let key in body){
//           if (body[key].id == params.id ) {
        
//             let obj = {
//               date: body[key].date,
//               mail: body[key].mail,
//               receipientUser: body[key].receipientUser,
//               senderEmail: body[key].senderEmail,
//               subject: body[key].subject,
//               id: key,
          
//             }
//             formatedData.push(obj)
//           }
         
//           setMailData(formatedData);
     
//         }
        
     
     
//       })
//   }, [params.id]);
//   const cancleButton = () => {
//     history("/mainPage")
//   }
//   return (
//     <div>
//       this is all mail
  
//       {openMailData.map((item) => (
//         <div key={item.date}>
//           <h1>{item.mail}</h1>
//           <p>{item.receipientUser}</p>
//           <button onClick={cancleButton}>cancle</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AllMailBoxComponent;
// AllMailBoxComponent.js
import Header from '../../Header/Header';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import "./AllMailBoxComponent.css"
import { useContext } from 'react';
import { MyContext } from '../../Contex/ContextApi';
function AllMailBoxComponent() {
  const [openMailData, setMailData] = useState([]);
  const params = useParams();
  const history = useHistory(); 
 const ctx= useContext(MyContext)

  useEffect(() => {
    fetch(`https://clone-8c9f5-default-rtdb.asia-southeast1.firebasedatabase.app/gmail.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res.json();
      })
      .then((body) => {
        let formatedData = [];
        for (let key in body) {
        
          if (key == params.id) {
           
            let obj = {
              date: body[key].date,
              mail: body[key].mail,
              receipientUser: body[key].receipientUser,
              senderEmail: body[key].senderEmail,
              subject: body[key].subject,
              id: key,
            };
            formatedData.push(obj);
          }
        }
        setMailData(formatedData);
        console.log(openMailData,"this  is  mail data")
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  const cancelButton = () => {
    history.push("/mainPage");
    ctx.displayInboxBox()
  };

  return (
    <div className="all-mail-container">
     
      {openMailData.length === 0 ? (
        <p>No email data found for this ID.</p>
      ) : (
        <div className="email-details">
          <h4>Subject: {openMailData[0].subject}</h4>
          <p>Content: {openMailData[0].mail}</p>
          <p>To:  {openMailData[0].receipientUser}</p>
          <p>From:  {openMailData[0].senderEmail}</p>
          <p>Date:  {openMailData[0].date}</p>

          <button className="cancel-button" onClick={cancelButton}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default AllMailBoxComponent;
