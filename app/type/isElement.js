import {isFunction, isObjectLike} from '../type'
import {GLOBAL} from '../constant'

/**
 * 检测是否是DOM元素
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isElement = (value) => {
  if (isFunction(GLOBAL.HTMLElement)) {
    return value instanceof GLOBAL.HTMLElement
  }
  return isObjectLike(value) && value.nodeType === 1
}
