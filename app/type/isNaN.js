import {GLOBAL} from '../constant'

/**
 * 检测是否是NaN, 引用window下的isNaN函数
 *
 * @since 1.0.0
 * @param {any} value
 * @return {boolean} boolean
 */
export const isNaN = (value) => GLOBAL.isNaN(value)
