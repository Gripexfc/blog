import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../api/axios';
// import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    console.log(container, '------------------------');
    ReactDOM.createRoot(container).render(<App />);
});
