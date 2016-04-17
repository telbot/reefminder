'use strict';

/* eslint-env node */
/* eslint-disable prefer-template  */

const path = require('path');

const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: path.join(__dirname, 'client', 'src'),
    entry: [
        './main.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-1'
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-1,presets[]=react,plugins[]=babel-plugin-transform-decorators-legacy'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            }
        ]
    },
    postcss: [autoprefixer, precss],
    resolve: {
        root: [
            path.join(__dirname, 'client', 'src')
        ],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = overrides => merge.smart(config, overrides);