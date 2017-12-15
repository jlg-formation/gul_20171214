const path = require('path');

module.exports = {
	entry: {
		bundle: './app/app.js'
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
	devtool: 'source-map'
};
