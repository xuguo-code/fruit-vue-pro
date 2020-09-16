const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
// 参数处理
const args = require('minimist')(process.argv.slice(2))

const ModuleName = args._[0]

const tempMap = {
  index: path.resolve(__dirname, './.temp/module.index'),
  route: path.resolve(__dirname, './.temp/module.route')
}

run()

function run() {
  if (!ModuleName) {
    console.log(chalk.red(`should have a module name for this command`))
    return
  }

  const { index, route } = getTemp(ModuleName)
  writeTemp(ModuleName, index, route)
  console.log(chalk.green(`create module success...`))
}

function getTemp(camelName) {
  const PascalName = camelName[0].toUpperCase() + camelName.slice(1)
  let indexStr = readTemp('index')
  let routeStr = readTemp('route')
  console.log(chalk.green(`replace module name to template...`))
  return {
    index: indexStr.replace(/{{moduleName}}/g, PascalName),
    route: routeStr.replace(/{{moduleName}}/g, camelName)
  }
}

function readTemp(temp) {
  const tempPath = tempMap[temp]
  return fs.readFileSync(tempPath, 'utf-8')
}

function writeTemp(name, index, route) {
  console.log(chalk.green(`create module to project...`))
  const moduleBasePath = path.resolve(__dirname, '../src/views')
  const dirPath = path.resolve(moduleBasePath, name)
  const indexPath = path.resolve(moduleBasePath, `${name}/Index.vue`)
  const routePath = path.resolve(moduleBasePath, `${name}/${name}.routes.js`)
  fs.mkdirSync(dirPath)
  fs.writeFileSync(indexPath, index)
  fs.writeFileSync(routePath, route)
}
