import kkRequest from "../../network/index";
import { accountType } from "./type"
import { userInfoIdType } from "./type"
import { roleIdType } from "./type"

export function accountLoginRequest(account: accountType) {
  return kkRequest.post({
    url: "/login",
    data: account
  })
}

export function userInfoRequest(id: userInfoIdType) {
  return kkRequest.get({
    url: `/users/${id}`
  })
}

export function menuRequest(roleId: roleIdType) {
  return kkRequest.get({
    url: `/role/${roleId}/menu`
  })
}

