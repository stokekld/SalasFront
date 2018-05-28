const webpack = require('webpack')
const path = require('path')

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');




/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
    entry: {
	index: './src/index.js',
	login: ['babel-polyfill', './src/login.js']
    },

    output: {
	filename: '[name].js',
	path: path.resolve(__dirname, 'static/js/')
    },

    module: {
	rules: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		query:{
		    presets: ['env', 'react']
		}
	    }
	]
    },

    plugins: [new UglifyJSPlugin()],
    mode: 'development',

    optimization: {
	splitChunks: {
	    chunks: 'async',
	    minSize: 30000,
	    minChunks: 1,
	    name: true,

	    cacheGroups: {
		vendors: {
		    test: /[\\/]node_modules[\\/]/,
		    priority: -10
		}
	    }
	}
    }
}
