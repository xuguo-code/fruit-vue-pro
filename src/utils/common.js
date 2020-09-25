/**
 * 函数符复合方法
 * @param  {...any} funcs n个函数顺序传入
 * 生成的函数传递的参数作为第一个函数的参数传入
 * 每个参数的函数都必须拥有返回值，并且返回值会传递给下一个函数作为参数
 */
export function genratePipeFunc(...funcs) {
  if (funcs.length === 0) return (...args) => args
  if (funcs.length === 1) (...args) => [0](...args)
  return funcs.reduce((left, right) => (...args) => right(left(...args)))
}

/**
 * 聚合 Vue.use
 */
export function composeVueUse(Vue) {
  let cacheVue = Vue
  return (...plugins) => {
    plugins.forEach(plugin => {
      cacheVue.use(plugin)
    })
  }
}

/**
 * 获取 pathname
 */
const fakeHost = 'http://a.com'
export function getPurePathname(fullPath) {
  const URI = new URL(fullPath, fakeHost)
  return URI.pathname
}
