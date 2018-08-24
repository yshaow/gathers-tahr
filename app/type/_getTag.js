import {GLOBAL} from '../constant'

/**
 * 获取当前value的toString
 *
 * @private
 * @since 1.0.0
 * @param {any} value
 * @returns {string} string
 */
const getTag = (value) => GLOBAL.toString.call(value)
export default getTag
