// see https://github.com/lelandrichardson/enzyme-example-karma-webpack/blob/master/karma.conf.js (but note extra externals with 0.15.0 React)
var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['ChromeCanary', 'Chrome'],
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
                    },
                    //See https://github.com/airbnb/enzyme/issues/309 as to why json loader is needed. 
                    //I had to add this when I tried to use enzyme's 'render', which uses Cherrio
                    {
                        test: /\.json$/,
                        loader: 'json',
                    }
                ]
            },
            //Needed for enzyme working with webpack & React 0.15.0. See http://airbnb.io/enzyme/docs/guides/webpack.html#react-15-compatability 
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
    });
};