import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../api/axios';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    console.log(container, '------------------------');
    ReactDOM.createRoot(container).render(<App />);
});
