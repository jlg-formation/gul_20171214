(function () {
	'use strict';

	var app = angular.module('main', ['ors-layout']);

	app.run(function ($rootScope) {
		$rootScope.name  = 'Christine';
	});

})();
