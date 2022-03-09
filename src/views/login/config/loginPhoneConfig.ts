const phoneRules = {
  phoneNumber: [
    {
      required: true,
      message: "手机号不能为空!",
      trigger: "blur"
    },
    {
      pattern:  /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      message: "请输入正确的手机号格式!",
      trigger: "blur"
    }
  ],
  verify: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{6}$/,
      message: "请输入6位数字",
      trigger: "blur"
    }
  ]
}

export default phoneRules
