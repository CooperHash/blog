import axios from 'axios'
import { token } from './token/index'
const service = axios.create({
    baseURL: 'http://localhost:3010/all'
})


if(token) {
    service.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('user')}`
}


export default service