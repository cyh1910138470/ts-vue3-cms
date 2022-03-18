import { Module } from "vuex";
import { systemState } from "./type"
import { RootType } from "../../type"
import getPageListRequest from "../../../network/main/system/system"

const systemModule: Module<systemState, RootType> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, payload) {
      state.userList = payload
    },
    changeUserCount(state, payload) {
      state.userCount = payload
    }
  },
  actions: {
    async getPageListAction(context, payload) {
      const result: any = await getPageListRequest(payload.path, payload.queryInfo)
      console.log(result);
      const { list, totalCount } = result.data.data
      context.commit("changeUserList", list)
      context.commit("changeUserCount", totalCount)
    }
  }
}

export default systemModule
