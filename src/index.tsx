import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <div className='mt-24 mx-auto text-center'>
            <h1 className='text-xl mb-4'>Hi There, this site is couple years old and I am renovating now.</h1>
            <div>
                <a className='mr-4' href='https://github.com/vannizhang'>My Github Profile</a>
                <a href='https://www.linkedin.com/in/jinnan-zhang-044a7123/'>My LinkedIn Profile</a>
            </div>
        </div>
        
    </React.StrictMode>,
    document.getElementById('root')
);