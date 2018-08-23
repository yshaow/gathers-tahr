/**
 * 获取当前value的toString
 *
 * @private
 * @since 1.0.0
 * @param {any} value
 * @returns {string} string
 */
const getTag = (value) => toString.call(value)
export default getTag
