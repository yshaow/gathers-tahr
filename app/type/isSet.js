import getTag from './_getTag'

/**
 * 检测是否是set
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isSet = (value) => getTag(value) === '[object Set]'
