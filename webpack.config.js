const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		bundle: './app/app.js',
		vendors: './app/vendors.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './app/wpk')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}]
		}]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors'),
		new webpack.optimize.UglifyJsPlugin()
	]
};
