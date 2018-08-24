import getTag from './_getTag'

/**
 * 检测是否是arguments
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isArguments = (value) => getTag(value) === '[object Arguments]'
