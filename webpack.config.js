const path = require('path');
var config = {
    watch: true, // turn false in production
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 8080,
        publicPath: "/",
        contentBase: "./dist",
        hot: true
    },
    // mode: 'production',  // Uncomment in production
    mode: 'development',  // Comment in production
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
module.exports = config;