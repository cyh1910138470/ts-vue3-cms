import axios from "axios"
import { ElLoading } from 'element-plus'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

interface kkRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface kkRequestConfig extends AxiosRequestConfig {
  interceptors?: kkRequestInterceptors
  ShowLoading?: boolean
}

class kkRequest {
  constructor(config: kkRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //1.从config拿出的拦截器是实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch)
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch)

    //2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use((config: kkRequestConfig) => {
      if (config.ShowLoading) {
        const loading = ElLoading.service({
          lock: true,
          text: "正在加载",
          background: "rgba(0, 0, 0, 0.5)"
        })
        this.loading = loading
      }
      console.log("全局-请求成功拦截");
      return config
    }, err => {
      console.log("全局-请求失败拦截");
      return err
    })
    this.instance.interceptors.response.use(res => {
      setTimeout(() => {
        this?.loading?.close()
      }, 500)
      //1.响应失败
      const data = res.data
      if (data.returnCode === "-1001") {
        console.log("请求失败 错误码-1001");
      }
      console.log("全局-响应成功拦截");
      return res
    }, err => {
      //2.响应失败
      // switch(err.response.status) 判断错误码给不同的页面
      console.log("全局-响应失败拦截");
      return err
    })
  }
  loading?: any
  interceptors?: kkRequestInterceptors
  instance: AxiosInstance
  request(config: kkRequestConfig) {
    //3.某个实例单独添加拦截器
    if (config?.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        if (config?.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        // console.log(res.data);
        resolve(res)
      })
    })
  }
  get(config: kkRequestConfig) {
    return this.request({...config, method: "get"})
  }
  delete(config: kkRequestConfig) {
    return this.request({...config, method: "delete"})
  }
  post(config: kkRequestConfig) {
    return this.request({...config, method: "post"})
  }
}

export default kkRequest

