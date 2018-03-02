import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  withCredentials: true
})

// request interceptor
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (process.env.NODE_ENV === 'development' || res.status.code === 3000 || res.status.code === 0) {
      return response
    } else {
      return Promise.reject(res.status.message)
    }
  },
  error => {
    console.log('error: ' + error)
    return Promise.reject(error)
  })

export default service