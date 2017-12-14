(function () {
	'use strict';

	var app = angular.module('main', []);

	app.run(function ($rootScope) {
		$rootScope.name  = 'Christine';
	});

})();
