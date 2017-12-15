const express = require('express');
const serveIndex = require('serve-index');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

const webpackConfig = require('./webpack.config.js');
webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
// eslint-disable-next-line
app.use('/app/wpk/', webpackDevMiddleware(compiler, {}));

const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {icons: true}));



app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

var port = 9000;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
