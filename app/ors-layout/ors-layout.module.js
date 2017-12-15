import orsHeaderHtml from './tmpl/ors-header.html';
import orsFooterHtml from './tmpl/ors-footer.html';

const app = angular.module('ors-layout', []);

app.directive('orsHeader', function () {
	return {
		template: orsHeaderHtml
	};
});
app.directive('orsFooter', function () {
	return {
		template: orsFooterHtml
	};
});