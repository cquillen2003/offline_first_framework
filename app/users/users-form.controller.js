'use strict';

angular.module('myApp.users.form', [])

.controller('UsersFormCtrl', ['$scope', function($scope) {

	$scope.users = [
		{ name: 'Corey', email: 'dontworrryaboutit'}
	];

}]);
