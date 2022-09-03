import axios from 'axios';

export default axios.create({
    timeout: 10000,
    baseURL:"https://api.github.com/users/GustavPcosta/respos",
    headers:{
        'Content-Type':'apllication/json'
    }
})