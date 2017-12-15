import './style.scss';

import './ors-layout/ors-layout.module.js';

const app = angular.module('main', ['ors-layout']);

app.run(function ($rootScope) {
	$rootScope.name = 'Ben';
});

console.log('this', this);
