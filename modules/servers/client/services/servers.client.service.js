'use strict';

//Servers service used to communicate Servers REST endpoints
angular.module('servers').factory('Servers', ['$resource',
	function($resource) {
		return $resource('api/servers/:serverId', { serverId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);