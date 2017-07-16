const util = require('util')
const redis = require('../redis')

module.exports = async (ctx) => {
    ctx.body = await redis.get('list')
}
