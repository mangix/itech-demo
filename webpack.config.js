const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        common: ['react', 'react-dom'],
        app: ['babel-polyfill', './src/app.jsx']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        chunkFilename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    'presets': [
                        'react',
                        ['env',
                            {
                                'targets': {
                                    'browsers': ['> 1%']
                                }
                            }
                        ]]
                    // 'plugins': ['transform-object-rest-spread']
                }
            }
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, 'postcss.config.js')
                        }
                    }
                },
                'less-loader'
            ]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common'],
            minChunks: Infinity
        })
    ],
    devServer: {
        publicPath: '/dist/',
        compress: true,
        port: 9000
    }
}
