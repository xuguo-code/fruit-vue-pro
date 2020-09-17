import axios from 'axios'
import { getToken, removeToken } from './auth'

let serve = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})

// 错误处理
const errorHandle = error => {
  if (error.response) {
    const data = error.response.data
    const token = getToken()
    if (error.response.status === 401) {
      console.log(data.msg)
      if (token) {
        removeToken()
      }
    }
  }
  return Promise.reject(error)
}

// 拦截器
serve.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, errorHandle)

serve.interceptors.response.use(response => {
  return response.data
}, errorHandle)

export default serve
