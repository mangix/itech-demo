const http = require('http')
const url = require('url')
const query = require('querystring')
const path = require('path')
const actions = {}
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
        actions[route] = require(file)
    })
})

http.createServer((request, response) => {
    let urlObject = url.parse(request.url)
    let queryObject = query.parse(urlObject.query)
    let context = {
        path: urlObject.path,
        query: queryObject
    }
    let action = actions[urlObject.pathname]
    if (action) {
        action(context, request, response)
    } else {
        response.statusCode = 404
        response.end('not found')
    }
}).listen(8090)
