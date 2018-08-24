import {isFunction} from '../type'

/**
 * 检测是否是prototype
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isPrototype = (value) => {
  const Ctor = value && value.constructor
  const proto = isFunction(Ctor) ? Ctor.prototype : Object.prototype

  return value === proto
}
