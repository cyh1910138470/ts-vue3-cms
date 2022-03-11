import { Module } from 'vuex'
import { LoginType } from './type'
import router from '../../router/index'
import { RootType } from '../type'
import { accountLoginRequest } from '../../network/login/login'
import { userInfoRequest } from '../../network/login/login'
import { menuRequest } from '../../network/login/login'
import { dataType } from '../../network/login/type'
import LocalCache from '../../utils/cache'
import { mapMenusRoutes } from "../../utils/mapMenus"
import { AddRouters } from "../../utils/mapMenus"

const LoginModule: Module<LoginType, RootType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menu: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      console.log('已经修改了token')
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      console.log('已经修改了userInfo')
      state.userInfo = userInfo.data
    },
    changeMenu(state, menu) {
      console.log('已经修改了menu')
      state.menu = menu
      const routes = mapMenusRoutes(menu)
      console.log(routes);
      AddRouters("main", routes)
      LocalCache.setCache("routes", routes)
    },
    saveToken(state, token) {
      state.token = token
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    saveMenu(state, menu) {
      state.menu = menu
    },
    // saveRoutes(state, routes) {
    //   AddRouters("main", routes)
    //   console.log("已经重新添加了路由");
    // }
  },
  actions: {
    async accountLogin(context, payload) {
      // context.commit()
      console.log('执行了账号密码登录', payload)
      const loginResult: any = await accountLoginRequest(payload)
      const loginResultData: dataType = loginResult.data
      const { code, data } = { ...loginResultData }
      LocalCache.setCache('token', data.token)
      context.commit('changeToken', data.token)
      const userInfoPromise = userInfoRequest(data.id)
      userInfoPromise.then((res: any) => {
        context.commit('changeUserInfo', res.data)
        LocalCache.setCache('userInfo', res.data)
        console.log(res.data)
        LocalCache.setCache('roleID', res.data.data.role.id)
        const menuPromise = menuRequest(res.data.data.role.id)
        menuPromise.then((res: any) => {
          console.log(res.data.data)
          const menu = res.data.data
          LocalCache.setCache('menu', menu)
          context.commit('changeMenu', menu)
        })
        // console.log(menu);
        router.push('/main')
      })
    },
    phoneLogin(context, payload) {
      // context.commit()
      console.log('执行了手机验证登录', payload)
    },
    setupLoginState(context) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const menu = LocalCache.getCache('menu')
      if (token) {
        context.commit('saveToken', token)
      }
      if (userInfo) {
        context.commit('saveUserInfo', userInfo)
      }
      if (menu) {
        context.commit('saveMenu', menu)
      }
    },
    setupRouteState(context) {
      const routes = LocalCache.getCache("routes")
      // context.commit("saveRoutes", routes)
      AddRouters("main", routes)
    }
  }
}

export default LoginModule
