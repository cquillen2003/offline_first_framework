'use strict';

angular.module('myApp.users.list', [])

.controller('UsersListCtrl', ['$scope', 'store', function($scope, store) {

	store.findAll('user').then(function(res) {
		console.log(res);
		$scope.users = res.docs;
		$scope.$apply(); 
	});

}]);
