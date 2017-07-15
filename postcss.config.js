module.exports = {
    plugins: [
        require('postcss-autoreset')({
            reset: {
                margin: 0,
                padding: 0,
                borderRadius: 0
            }
        }),
        require('postcss-initial')({
            reset: 'all'
        }),
        require('autoprefixer')({
            browsers: ['> 5%']
        })
    ]
}
