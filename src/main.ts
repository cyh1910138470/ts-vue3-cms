import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
// import { globalRegister } from './global'

//全局引用element-plus
import ElementPlus, { ElOptionGroup } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { LocalLoginState } from './store/index'
import { LocalRoutesState } from './store'
import { timeUtcFormat } from "./utils/timeFormat"

const app = createApp(App)
//全局引用element-plus
app.use(ElementPlus, {
  locale: zhCn
})
// app.use(globalRegister)
app.use(store)
LocalLoginState()
app.use(router)

app.config.globalProperties.$filters = {
  foo: () => {
    return "当前 foo"
  },
  timeformat: (time: string) => {
    const timeParse = timeUtcFormat(time)
    return timeParse
  }
}
app.mount('#app')
LocalRoutesState()

// console.log(process.env.VUE_APP_BASE_NAME);
// console.log(process.env.VUE_APP_BASE_URL);

// import instance1 from "./network"
// instance1.request({
//   method: "get",
//   url: "home/multidata",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独请求-请求成功拦截");
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("单独响应-响应成功拦截");
//       return res
//     }
//   },
//   ShowLoading: true
// }).then((res) => {
//   console.log('----------------------------');
//   console.log(res);
//   console.log('----------------------------');
// })
