import varibles from '@/styles/_varibles.scss'

export const themeKeys = ['backgroundColor', 'textColor', 'activeTextColor']

export function genThemeObject(mode) {
  return themeKeys.reduce((memo, key) => {
    const styleKey = `${mode}-${key}`
    if (Reflect.has(varibles, styleKey)) {
      memo[key] = varibles[styleKey]
    } else {
      const defaultKey = `light-${key}`
      memo[key] = varibles[defaultKey]
    }
    return memo
  }, {})
}
