import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.scss';
import App from './App'


axios.defaults.baseURL = `http://localhost:8081/`;
axios.defaults.headers.post['Content-Type'] = 'application/vnd.api+json';
axios.defaults.withCredentials = true;
axios.defaults.headers.get['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInJvbGxubyI6IjEyMDIyMDA1In0.9Btng_hYvKwIjeYS88zAolwiKfuRJE4Q71LMT_lK9jI`

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)