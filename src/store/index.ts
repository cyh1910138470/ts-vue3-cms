import { createStore } from 'vuex'
import LoginModule from './login/login'
import { RootType } from './type'
import LocalCache from '../utils/cache'
import router from '../router/index'
import { AddRouters } from '../utils/mapMenus'
import systemModule from "./main/system/system"

const store = createStore<RootType>({
  state: {
    name: 'kenshin',
    age: 18
  },
  mutations: {},
  actions: {},
  modules: {
    LoginModule,
    systemModule
  }
})

export function LocalLoginState() {
  store.dispatch('LoginModule/setupLoginState')
}
export function LocalRoutesState() {
  // store.dispatch('LoginModule/setupRouteState')
  // console.log(LocalCache.getCache("routes"));
}

export default store
