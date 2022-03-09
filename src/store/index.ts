import { createStore } from 'vuex'
import LoginModule from "./login/login"
import { RootType } from "./type"

const store = createStore<RootType>({
  state: {
    name: "kenshin",
    age: 18
  },
  mutations: {},
  actions: {},
  modules: {
    LoginModule
  }
})

export function LocalLoginState() {
  store.dispatch('LoginModule/setupLoginState')
}

export default store
