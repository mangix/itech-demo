module.exports = (ctx) => {
    ctx.body = `index page , query is ${JSON.stringify(ctx.query)}`
}
