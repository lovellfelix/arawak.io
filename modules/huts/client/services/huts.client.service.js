'use strict';

//Huts service used to communicate Huts REST endpoints
angular.module('huts').factory('Huts', ['$resource',
	function($resource) {
		return $resource('api/huts/:hutId', { hutId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
