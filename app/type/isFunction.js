import getTag from './_getTag'

/**
 * 检测是否是function
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isFunction = (value) => {
  const tag = getTag(value)
  return tag == '[object Function]' || tag == '[object AsyncFunction]' ||
  tag == '[object GeneratorFunction]' || tag == '[object Proxy]'
}
