import axios from 'axios';

const instance = axios.create({
    validateStatus: status => (status >= 200 && status <= 500)
});

export default instance;