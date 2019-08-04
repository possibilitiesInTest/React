import axios from 'axios';

const KEY = 'AIzaSyCwif63ZJ_W0VUEP0FJGCXBepIiQWnObBU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});