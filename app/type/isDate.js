import getTag from './_getTag'

/**
 * 检测是否是date
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isDate = (value) => getTag(value) === '[object Date]'
