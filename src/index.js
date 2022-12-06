// These components hook react to the App.js page and push a display module

import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import { ContextProvider} from './contexts/ContextProvider';



ReactDOM.render(
    <ContextProvider>
        <App /> 
    </ContextProvider>,
    document.getElementById('root')
    );