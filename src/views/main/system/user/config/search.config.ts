import { propsType } from '../../../../../base_ui/type'
// const propsItems = {
//   type: Array as PropType<propsType[]>,
//   default: () => []
// }
const labelWidth = {
  'label-width': '100px'
}
const colLayout = {
  xs: 24,
  md: 12,
  lg: 8
}
const propsItems: propsType[] = [
  {
    filed: "string",
    type: 'input',
    label: 'username',
    placeholder: '请输入用户名'
  },
  {
    filed: "string",
    type: 'password',
    label: 'password',
    placeholder: '请输入密码'
  },
  {
    filed: "string",
    type: 'select',
    label: 'sports',
    placeholder: '请输入sports',
    options: [
      { title: '1111', value: 'AAAA' },
      { title: '2222', value: 'BBBB' },
      { title: '3333', value: 'CCCC' },
      { title: '4444', value: 'DDDD' },
      { title: '5555', value: 'EEEE' },
      { title: '6666', value: 'FFFF' }
    ]
  },
  {
    filed: "string",
    type: 'datepicker',
    label: 'createdate',
    placeholder: '请输入创建时间'
  },
  {
    filed: "string",
    type: 'datepicker',
    label: 'joindate',
    placeholder: '请输入加入时间'
  },
  {
    filed: "string",
    type: 'select',
    label: 'fruits',
    placeholder: '请输入fruits',
    options: [
      { title: 'AAAA', value: 'AAAA' },
      { title: 'BBBB', value: 'BBBB' },
      { title: 'CCCC', value: 'CCCC' },
      { title: 'DDDD', value: 'DDDD' },
      { title: 'EEEE', value: 'EEEE' },
      { title: 'FFFF', value: 'FFFF' }
    ]
  }
]

export {
  propsItems
}
