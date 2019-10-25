import React from 'react';
import ReactDOM from 'react-dom';
//import '@fortawesome/react-fontawesome/font-awesome.min.css'; 

import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(( 
    <BrowserRouter>
       <App />
    </BrowserRouter>
    
),document.getElementById('root'));

registerServiceWorker();
