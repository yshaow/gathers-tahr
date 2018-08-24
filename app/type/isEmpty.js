import {isArrayLike, isMap, isSet, isPrototype} from '../type'

/**
 * 检测是否是空
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isEmpty = (value) => {
  if (value == null) {
    return true
  }
  if (isArrayLike(value)) {
    return !value.length
  }
  if (isMap(value) || isSet(value)) {
    return !value.size
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length
  }
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false
    }
  }
  return true
}
