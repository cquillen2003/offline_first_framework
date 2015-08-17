'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.users.routes',
  'myApp.view2',
  'myApp.version',
  'myApp.store',
  'myApp.pouch',
  'myApp.couch'
])

.config(function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/view1');

	$stateProvider
		.state('nav', {
			url: '',
			templateUrl: 'layout/navbar.html'
		});

});
