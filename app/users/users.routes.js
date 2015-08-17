'use strict';

angular.module('myApp.users.routes', [
	'ui.router',
	'myApp.users.list',
	'myApp.users.form'
])

.config(['$stateProvider', function($stateProvider) {

	$stateProvider

	.state('nav.users', {
		abstract: true,
		url: '/users',
		template: '<div ui-view></div>'
	})
	.state('nav.users.list', {
		url: '',
		templateUrl: 'users/users-list.html',
		controller: 'UsersListCtrl'
	})
	.state('nav.users.new', {
		url: '/new',
		templateUrl: 'users/users-form.html',
		controller: 'UsersFormCtrl'
	});

}]);
