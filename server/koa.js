const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const path = require('path')
app.use(require('kcors')())

const glob = require('glob')
glob(path.join(__dirname, 'actions/**/*.js'), {
    nodir: true
}, (error, files) => {
    if (error) {
        console.error(error)
    }
    files.forEach(file => {
        let fileName = path.relative(path.join(__dirname, 'actions'), file)
        let route = '/' + fileName.replace(path.extname(fileName), '')
        router.get(route, require(file))
    })
})

app.use(router.routes())
app.listen(8090)
