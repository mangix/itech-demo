const redis = require('../redis')

module.exports = async ctx => {
    let result = {
        code: 500
    }
    let list = JSON.parse(await redis.get('list'))
    let id = +ctx.query.id
    let has = false
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            has = true
            list.splice(i, 1)
            break
        }
    }
    try {
        if (has) {
            await redis.set('list', JSON.stringify(list))
        }
        result.code = 200
    } catch (e) {
        console.error(e)
    }
    ctx.body = result
}
