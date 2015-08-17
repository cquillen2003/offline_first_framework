'use strict';

angular.module('myApp.store', [])

.factory('store', function(Pouch) {

	//API modeled after Ember.js' store methods

	console.log('store instantiated');

	var db = Pouch.db;

	console.log(db)

	return {
		findAll: function(type) {
			console.log('find all')
			var query = {
				selector: { type: type }
			}
			return db.find(query).catch(function(err) {
				console.log(err);
			})
		},
		create: function(doc) {
			db.post(doc).then(function(res) {
				console.log(res);
			}).catch(function(err) {
				console.log(err);
			});
		}
	}

});
