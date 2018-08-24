import getTag from './_getTag'

/**
 * 检测是否是map
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isMap = (value) => getTag(value) === '[object Map]'
