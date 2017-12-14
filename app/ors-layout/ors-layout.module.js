(function () {
	'use strict';

	const app = angular.module('ors-layout', []);
	app.directive('orsHeader', function(){
		return {
			templateUrl: 'ors-layout/tmpl/ors-header.html' 
		};
	});


})();
