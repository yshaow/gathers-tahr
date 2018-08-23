import getTag from './_getTag'
/**
 * 检测是否是number
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isNumber = (value) => (typeof value == 'number' || getTag(value) === '[object Number]')
