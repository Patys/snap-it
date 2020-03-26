import { isFunction } from './utils/functionUtils';

export function getRequiredProps(data) {
  let requriedString = ""
  for(let i = 0; i < data.length; i++) {
    if (data[i].required) {
      requriedString += `${data[i].name}: ${getPropValue(data[i].type)},\n`
    }
  }
  return requriedString
}

export function getOptionalPropsArray(data) {
  return data.filter(d => !d.required)
}

export function getPropValue(type: string) {
  if (isFunction(type)) {
    return 'jest.fn()'
  }

  switch(type) {
    case 'string':
      return '\'testing string\''
    case 'number':
      return '123'
    case 'boolean':
      return 'true'
    case 'object':
      return '{}'
    case 'any':
      return '{}'
    default:
      return 'undefined'
  }
}
