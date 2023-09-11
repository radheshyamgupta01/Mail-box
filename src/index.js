import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import Compose from './Component/Header/Compose/Compose';
 import Modal from './Component/Header/Compose/Modal';
import { MyContextProvider } from './Component/Contex/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
  <Provider store={store}>
  <App />

 
  </Provider>
  </MyContextProvider>

  
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
