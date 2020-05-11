/**
 * 函数符复合方法
 * @param  {...any} funcs n个函数顺序传入
 * 生成的函数传递的参数作为第一个函数的参数传入
 * 每个参数的函数都必须拥有返回值，并且返回值会产地给下一个函数作为参数
 */
export function genratePipeFunc(...funcs) {
  if (funcs.length === 0) return (...args) => args
  if (funcs.length === 1) (...args) => [0](...args)
  return funcs.reduce((left, right) => (...args) => right(left(...args)))
}
