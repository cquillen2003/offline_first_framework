'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/view1');

	$stateProvider
		.state('nav', {
			url: '',
			templateUrl: 'layout/navbar.html'
		});

}]);
