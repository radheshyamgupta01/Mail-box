import React, { useContext } from 'react';
// import './Drafts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons';
import { MyContext } from '../Contex/ContextApi';

function DraftsBoxComponent() {
  const ctx = useContext(MyContext);

  // Create an array of dummy data
  const emails = [
    {
      sender: 'John Doe',
      subject: 'Important Meeting',
      time: '2 hours ago',
    },
    {
      sender: 'Alice Smith',
      subject: 'Vacation Plans',
      time: '1 day ago',
    },
    {
      sender: 'Bob Johnson',
      subject: 'Project Update',
      time: '3 days ago',
    },
    {
      sender: 'Mary Davis',
      subject: 'Invitation',
      time: '1 week ago',
      ass:"this is outbox"
    },
  ];
  


  return (
    <div className="main-inbox" >
 
    <table className="email-table">
this drafts boxcomponet hhjgggugug
      <tbody>
        {emails.map((email, index) => (
          <tr key={index} >
            <div className="tr">
              <td> <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon></td>
              <td> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></td>
              <td>{email.sender}</td>
              <td>{email.subject}</td>
              <td>{email.time}</td>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default DraftsBoxComponent;
