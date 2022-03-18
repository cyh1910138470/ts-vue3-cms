export const contentConfig = {
  title: "用户列表",
  propsList: [
    {prop: "name", label: "用户名", minWidth: "100"},
    {prop: "realname", label: "真是姓名", minWidth: "100"},
    {prop: "cellphone", label: "用户电话", minWidth: "150"},
    {prop: "enable", label: "状态", minWidth: "60", slotName: "status"},
    {prop: "createAt", label: "创建时间", minWidth: "150", slotName: "createAt"},
    {prop: "updateAt", label: "更新时间", minWidth: "150", slotName: "updateAt"},
    {prop: "operate", label: "操作", minWidth: "100", slotName: "operate"}
  ],
  isShowIndex: true
}
