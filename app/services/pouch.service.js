'use strict';

angular.module('myApp.pouch', [])

.factory('Pouch', function() {

	console.log('Pouch instantiated');

	var db = new PouchDB('testpouch');

	//Create indexes for pouchdb-find
	db.createIndex({
		index: {
			fields: ['type']
		}
	}).then(function(result) {
		console.log(result);
	}).catch(function(err) {
		console.log(err);
	});

	return {
		db: db
	}

});
