import getTag from './_getTag'

/**
 * 检测是否是array
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isArray = (value) => getTag(value) === '[object Array]'
