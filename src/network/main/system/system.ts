import kkRequest from "../../../network/index"

export default function(path: string, queryInfo: any) {
  return kkRequest.post({
    url: path,
    data: queryInfo
  })
}
