
/**
 * 用于浏览器端ajax请求
 */

import Axios from 'axios'
import { Message } from 'iview'

// 环境变量
const env = process.env.NODE_ENV || 'development'

console.log('env==============', env)
 
let baseUrl = {
  development: 'http://127.0.0.1:5555',
  production: 'http://127.0.0.1:5555'
}

let options = {
  baseURL: baseUrl[env],
  timeout: 5000,
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  },
  withCredentials: true
}
// 创建实例
let axios = Axios.create(options)

// 拦截
// axios.interceptors.response.use(
//   (res) => {
//     // const { status } = res
//     // if (!status || status !== 200 || status === 'error') {
//     //   return
//     // }
//     return res
//   },
//   (err) => {
//     // if (err && err.response.status !== 200) {
//     //   if (process.client) {
//     //     Message.error(err.response.data.msg || '')
//     //   }
//     // }
//     return Promise.resolve(err.response)
//   }
// )
export default axios