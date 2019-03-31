const webpack = require('webpack');
const path = require('path');


module.exports = function (env) {
    return [{
        target: "node",
        entry: {
            index: [
                path.resolve(__dirname, 'index.mjs')
            ]
        },
        output: {
            library: 'example',

            libraryTarget: 'commonjs2',
            filename: '[name].js',
            path: path.resolve(__dirname, 'bin'),
            devtoolModuleFilenameTemplate: '../[resource-path]',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js']
        },
        module: {
            rules: [{
                test: /\.m?jsx?$/,
                use: [
                    'babel-loader',
                    require.resolve('@open-wc/webpack-import-meta-loader'),
                ],
                exclude: /node_modules[\/\\]/
            }, {
                enforce: 'pre',
                test: /\.[tj]sx?$/,
                use: {
                    loader: 'source-map-loader',
                    options: {
                    }
                },
                exclude: /node_modules[\/\\]/
            }, {
                test: /\.css$/,
                use: [
                    'raw-loader'
                ]
            }]
        },
        plugins: [],
        devtool: 'source-map'
    },

]}