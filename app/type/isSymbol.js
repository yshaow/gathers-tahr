import getTag from './_getTag'

/**
 * 检测是否是Symbol
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isSymbol = (value) => getTag(value) === '[object Symbol]'
