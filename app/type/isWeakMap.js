import getTag from './_getTag'

/**
 * 检测是否是WeakMap
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isWeakMap = (value) => getTag(value) === '[object WeakMap]'
