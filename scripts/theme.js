const path = require('path')
const fs = require('fs')
const del = require('del')
const et = require('element-theme')
const chalk = require('chalk')
const resolve = p => path.resolve(__dirname, p)
// 参数处理
const args = require('minimist')(process.argv.slice(2))
const ThemeName = args._
const buildAll = args.a
// 获取需要编译的 theme
const AllTheme = require(resolve('../src/theme/et'))
const waitToBuild = buildAll ? AllTheme : AllTheme.filter(t => (ThemeName || []).includes(t.key))

const etOpt = {
  config: resolve('../src/theme/theme-variables.scss'),
  out: resolve('../public/themes'),
  minimize: true,
  browsers: ['> 1%', 'last 2 versions', 'not ie <= 10']
}

run()

async function run() {
  if (buildAll) {
    console.warn(chalk.yellow(`clean cache \n`))
    del.sync(resolve('../public/themes/**/*'))
  }

  if (waitToBuild && waitToBuild.length > 0) {
    for (let theme of waitToBuild) {
      await buildTheme(theme)
    }
  } else {
    console.warn(chalk.yellow(`should input a valid theme-key \n`))
  }
}

async function buildTheme(theme) {
  const { key } = theme
  console.log(chalk.green(`build for theme ${key}... \n`))
  replaceTemp(theme['--color-primary'])
  etOpt.out = resolve(`../public/themes/${key}`)
  if (!buildAll) {
    del.sync(etOpt.out)
  }
  await etPromise(etOpt)
  del([`${etOpt.out}/*.css`, `!${etOpt.out}/index.css`, `!${etOpt.out}/fonts`])
  console.log(chalk.green(`theme ${key} build success \n`))
}

function replaceTemp(primaryColor) {
  console.log(primaryColor)
  const css = fs.readFileSync(etOpt.config, 'utf-8')
  var res = css.replace(
    /\$--color-primary:(.*) !default;/,
    `$--color-primary:${primaryColor} !default;`
  )
  fs.writeFileSync(etOpt.config, res)
}

function etPromise(etOpt) {
  return new Promise(resolve => {
    et.run(etOpt, () => {
      resolve()
    })
  })
}
