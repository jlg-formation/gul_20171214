const app = angular.module('main', ['ors-layout']);

app.run(function ($rootScope) {
	$rootScope.name = 'Christine';
});

console.log('this', this);
