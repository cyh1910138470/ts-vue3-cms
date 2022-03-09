const AccountRules = {
  name: [
    {
      required: true,
      message: "用户名不能为空!",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,20}$/,
      message: "用户名必须为5-20个英文字母或数字!",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "用户密码不能为空!",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: "用户密码必须为6-20个英文字母或者数字",
      trigger: "blur"
    }
  ]
}

export default AccountRules
