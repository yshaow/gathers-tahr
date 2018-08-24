import {isNumber, isFunction, isNull} from '../type'
import {MAX_SAFE_INTEGER} from '../constant'

/**
 * 检查length属性的合法性
 *
 * @since 1.0.0
 * @param {any} length
 * @returns {boolean} boolean
 */
const isLength = (length) => (isNumber(length) && length > -1 &&
length % 1 == 0 && length <= MAX_SAFE_INTEGER)

/**
 * 检测是否是array-like
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isArrayLike = (value) => (!isNull(value) && !isFunction(value) &&
isLength(value.length))
