import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID c67e1a5e3b5ab4e418d382a5f58bfa385daabd7067e0aab984ae4f6eb84340bd'
    }
});