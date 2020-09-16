const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  let url = ctx.url
  if (!url.includes('favicon')) {
    const data = paserUrlToData(url)
    if (data) {
      ctx.body = data
    } else {
      console.log('no data ', data)
      ctx.body = {
        code: 500,
        msg: 'mock serve error'
      }
    }
  }
  next()
})

app.listen(8181, () => console.log(`mock serve listen at 8181`))

function paserUrlToData(url = '') {
  let fileName = url
    .slice(1)
    .split('/')
    .join('-')
  let res = null
  try {
    res = require(`./api/${fileName}.js`)
  } catch (error) {
    console.log(`api ${url} is valid`)
  }
  return res
}
