import axios from 'axios';

const api= axios.create({
   // baseURL: process.env.REACT_APP_API,

    //baseURL: 'https://jsonplaceholder.typicode.com/',

    baseURL: 'http://localhost:3001/',

});

export default api;