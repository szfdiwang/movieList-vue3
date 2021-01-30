import axios from 'axios'

const http = axios.create({
  baseURL: '/api', // process.env.VUE_APP_BASE_API,
  timeout: 50000
})

http.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

export default http
