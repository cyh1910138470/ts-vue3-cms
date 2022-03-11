console.log('axios.ts......')
import axios from 'axios'
// axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
//   console.log(res);
// })
// axios.get("http://httpbin.org/get", {
//   params: {
//     name: "kenshin",
//     age: 20
//   }
// }).then(res => {
//   console.log(res.data);
// })
// axios.post("http://httpbin.org/post", {
//   data: {
//     name: "kkkkk",
//     lll: "ssss"
//   }
// }).then(res => {
//   console.log(res.data);
// })

//promise本身是可以有类型的
// new Promise<string>((resolve, reject) => {
//   reject("err")
// }).then(res => {
//   console.log(res);
// }, err => {
//   console.log(`${err}----`);
// })

//axios配置 baseURL url methods
//1.全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 1000

//2.局部配置
// axios.get("get", {
//   baseURL: "http://httpbin.org",
//   timeout: 500,
//   params: {
//     name: "kenshin",
//     age: 20
//   },
// }).then(res => {
//   console.log(res.data);
// })
// axios.post("post", {
//   baseURL: "http://httpbin.org",
//   timeout: 500,
//   data: {
//     name: "kkkkk",
//     lll: "ssss"
//   }
// }).then(res => {
//   console.log(res.data);
// })

//axios.all 多个请求一起返回
// axios.all([
//   axios.get("get", {params: {name: "kenshin", age: 111}}),
//   axios.post("post", {data: {name: "kazusa", age: 222}})
// ]).then(res => {
//   console.log(res);
// })

//axios拦截器
//fn1: 请求发送成功会执行的函数
//fn2: 请求发送失败会执行的函数
//fn3: 响应发送成功会执行的函数
//fn4: 响应发送失败会执行的函数
// axios.interceptors.request.use(fn1, fn2);
// axios.interceptors.response.use(fn3, fn4);

axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    //1.给请求添加token
    //2.loading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求失败的拦截')
    return err
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log('服务器响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败的拦截')
    return err
  }
)

export default {}
