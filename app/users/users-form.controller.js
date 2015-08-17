'use strict';

angular.module('myApp.users.form', [])

.controller('UsersFormCtrl', ['$scope', 'store', function($scope, store) {

	$scope.user = {
		type: 'user'
	};

	$scope.createUser = function() {
		console.log($scope.user)
		store.create($scope.user);
	}

}]);
