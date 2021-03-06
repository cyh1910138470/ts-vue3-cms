import dashboard from "../router/analysis/dashboard/dashboard"
import overview from "../router/analysis/overview/overview"
import category from "../router/product/category/category"
import goods from "../router/product/goods/goods"
import chat from "../router/story/chat/chat"
import list from "../router/story/list/list"
import department from "../router/system/department/department"
import menu from "../router/system/menu/menu"
import role from "../router/system/role/role"
import user from "../router/system/user/user"

import router from "../router/index"

let AllRoutes: any[] = [dashboard, overview, category, goods, chat, list, department, menu, role, user]
const routes: any[] = []
export function mapMenusRoutes(arr: any[]) {
  arr.forEach((item) => {
    if (item.type === 2) {
      AllRoutes.forEach((arrItem) => {
        if (arrItem.path === item.url) {
          routes.push(arrItem)
        }
      })
    }
    if (item.children) {
      mapMenusRoutes(item.children)
    }
  })
  return routes
}

export function AddRouters(firstRoute: string, arr: any[]) {
  arr.forEach((item) => {
    router.addRoute(firstRoute, item)
  })
}
