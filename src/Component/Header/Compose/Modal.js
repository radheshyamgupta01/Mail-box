import React from 'react';
import './Modal.css';

function Modal() {
  console.log("this  is from modal div")
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New Mail</h2>
        <form>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input type="text" id="to" name="to" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <button className="close-button" >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
