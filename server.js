const express = require('express');
const serveIndex = require('serve-index');

var app = express();



const htdocs = '.';
app.use(express.static(htdocs));
app.use(serveIndex(htdocs, {icons: true}));



app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

var port = 8000;
app.listen(port, function() {
	console.log('server started on port ' + port);
});
