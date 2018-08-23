import {isObjectLike} from '../type'

/**
 * 检测是否是object
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isObject = (value) => isObjectLike(value)
