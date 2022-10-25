import axios from 'axios'
import { token } from './token/index'
const service = axios.create({
    baseURL: 'http://localhost:3010/all'
})




export default service