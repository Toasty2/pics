import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: 'Client-ID ' /* Add API key here */
    },
    baseURL: 'https://api.unsplash.com'
});