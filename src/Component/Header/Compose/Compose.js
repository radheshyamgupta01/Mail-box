import React, { useState ,useContext} from 'react';
import { MyContext } from '../../Contex/ContextApi';
import "./Compose.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal"
import { ModalAction } from '../../../Redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Modal.css';

function Compose() {
  const dispatch = useDispatch();
  const ctx=useContext(MyContext)

  function compose() {
  
    dispatch(ModalAction.updateModal());
    ctx.toggleModal()

  
  }

  return (
    <div className="compose" onClick={compose}>
    
    <h4>compose</h4>
      
     
      
    </div>

  );
}

export default Compose;
