import getTag from './_getTag'

/**
 * 检测是否是boolean
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isBoolean = (value) => getTag(value) === '[object Boolean]'
