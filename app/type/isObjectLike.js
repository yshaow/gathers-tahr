import {isNull} from '../type'

/**
 * object-like
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isObjectLike = (value) => (typeof value === 'object' && !isNull(value))
