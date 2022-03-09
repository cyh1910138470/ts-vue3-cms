import kkRequest from "./request";
import LocalCache from "../utils/cache"

const instance = new kkRequest({
  // baseURL: "http://123.207.32.32:8000",
  baseURL: "http://152.136.185.210:5000",
  // baseURL: "/api",
  interceptors: {
    requestInterceptor(config: any) {
      //携带token的拦截
      const token = LocalCache.getCache("token")
      console.log(`当前localstorage缓存的token是${token}`);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('token 添加成功!');
      console.log("请求拦截成功");
      return config
    },
    requestInterceptorCatch(err) {
      console.log("请求拦截失败");
      return err
    },
    responseInterceptor(config) {
      console.log("响应拦截成功");
      return config
    },
    responseInterceptorCatch(err) {
      console.log("响应拦截失败");
      return err
    }
  }
})

export default instance
