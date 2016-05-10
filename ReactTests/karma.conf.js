
var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['ChromeCanary'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        plugins: [
          'karma-chrome-launcher',
          'karma-mocha',
          'karma-mocha-reporter',
          'karma-sourcemap-loader',
          'karma-webpack'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/, exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
    });
};