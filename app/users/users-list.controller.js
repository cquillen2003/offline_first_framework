'use strict';

angular.module('myApp.users.list', [])

.controller('UsersListCtrl', ['$scope', function($scope) {

	$scope.users = [
		{ name: 'Corey', email: 'dontworrryaboutit'}
	];

}]);
