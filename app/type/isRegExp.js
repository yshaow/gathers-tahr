import getTag from './_getTag'

/**
 * 检测是否是RegExp
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isRegExp = (value) => getTag(value) === '[object RegExp]'
