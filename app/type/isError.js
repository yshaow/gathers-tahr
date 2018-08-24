import getTag from './_getTag'

/**
 * 检测是否是error
 *
 * @since 1.0.0
 * @param {any} value
 * @returns {boolean} boolean
 */
export const isError = (value) => {
  const tag = getTag(value)
  return tag == '[object Error]' || tag == '[object DOMException]'
}
