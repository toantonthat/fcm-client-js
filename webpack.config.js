module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },

    devServer: {
        port: 3000,
        writeToDisk: false
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.ttf$/,
                use: [
                    'url-loader',
                ],
            },
        ],
    },
}