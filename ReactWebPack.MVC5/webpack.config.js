var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

// bundle dependencies in separate vendor bundle
var vendorPackages = Object.keys(pkg.dependencies).filter(function (el) {
    return el.indexOf('font') === -1; // exclude font packages from vendor bundle
});

/*
 * Default webpack configuration for development
 */
var config = {
    devtool: 'eval-source-map',
    cache: true,
    entry: {
        main: path.join(__dirname, "app", "App.js"),
        vendor: vendorPackages
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: '[name].js',
        sourceMapFilename: "[file].map"
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    plugins: [
        new webpack.OldWatchingPlugin(),  //needed to make watch work. see http://stackoverflow.com/a/29292578/1434764
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ],
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015','react']
        }
    }]
    }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
    config.devtool = false;

    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: { warnings: false}
        }),
        new webpack.DefinePlugin({
          'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ];
};

module.exports = config;
