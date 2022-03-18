import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

const FORMATSTRING = "YYYY-MM-DD HH:mm:ss"
function timeUtcFormat(utcString: string, formatString: string = FORMATSTRING) {
  return dayjs.utc(utcString).format(formatString)
}
function timeStampFormat(stampString: string, formatString: string = FORMATSTRING) {
  return dayjs(stampString).format(formatString)
}
export {
  timeUtcFormat,
  timeStampFormat
}
