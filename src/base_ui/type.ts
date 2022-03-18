type FormItemTypes = 'input' | 'select' | 'password' | 'datepicker'

export interface propsType {
  filed: string
  type: FormItemTypes
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
}
