const redis = require('../redis')
const data = require('../data.json')

module.exports = async (ctx) => {
    await redis.set('list', JSON.stringify(data))
    ctx.body = {
        code: 200
    }
}
