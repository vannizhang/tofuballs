import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Layout />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);