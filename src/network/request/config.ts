let BASE_URL = ''
let BASE_NAME = ''

//根据process.env.NODE_ENV
//开发环境: development
//生产环境: production
//测试环境: test

if (process.env.NODE_ENV === 'developoment') {
  ;(BASE_URL = 'development URL'), (BASE_NAME = 'development NAME')
} else if (process.env.NODE_ENV === 'production') {
  ;(BASE_URL = 'production URL'), (BASE_NAME = 'production NAME')
} else {
  ;(BASE_URL = 'test URL'), (BASE_NAME = 'test NAME')
}

export { BASE_NAME, BASE_URL }
