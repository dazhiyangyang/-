/**
 * ajax请求 封装 项目自带
 * @author qinhuan
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios'
import { Message, MessageBox } from 'element-ui'
// import { getToken, removeDomainToken, removeToken } from '@/utils/auth'
// import { UserModule } from '@/store/modules/user'
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000
})

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (UserModule.token) {
    //   config.headers['Authorization'] = getToken()
    // }
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const token = response.headers.authorization
    if (token) {
      // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
      // UserModule.RefreshToken(token)
    }

    /**
     * status_code为非0是抛错 可结合自己业务进行修改
     */
    const res = response.data
    // if (!UserModule.isDownExcel) {
    if (res.status_code !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法的token; 50012:其他客户端登录了;  401:Token 过期了; 403没有权限
      if (res.status_code === 401 || res.status_code === 50012 || res.status_code === 50014 || res.status_code === -1) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // removeDomainToken()
          // removeToken()
          // UserModule.FedLogOut().then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject('error')
    } else if (res.status_code === 403) {
      ;(window.location as any) = '/noPremission'
    } else {
      return response.data
    }
    // }
    //  else {
    //   return response
    // }
  },
  (error: AxiosError) => {
    if ((error.response as AxiosResponse).status === 401) {
      MessageBox.confirm('登录状态已失效!, 请重新登录', '提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // removeDomainToken()
        // removeToken()
        location.reload()
        // UserModule.FedLogOut().then(() => {
        //   console.log(101)
        //   location.reload()
        // })
      })
    } else if ((error.response as AxiosResponse).status === 403) {
      ;(window.location as any) = '/noPremission'
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
