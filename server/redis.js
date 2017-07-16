const redis = require('redis')
const util = require('util')

let client = redis.createClient()

exports.get = util.promisify(client.get.bind(client))
exports.set = util.promisify(client.set.bind(client))
