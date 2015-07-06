'use strict';

// Servers controller
angular.module('servers').controller('ServersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Servers',
	function($scope, $stateParams, $location, Authentication, Servers ) {
		$scope.authentication = Authentication;

		// Create new Server
		$scope.create = function() {
			// Create new Server object
			var server = new Servers ({
				name: this.name,
				hostname: this.hostname,
				username: this.username,
				password: this.password
			});

			// Redirect after save
			server.$save(function(response) {
				$location.path('servers/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.hostname = '';
				$scope.username = '';
				$scope.password = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Server
		$scope.remove = function( server ) {
			if ( server ) { server.$remove();

				for (var i in $scope.servers ) {
					if ($scope.servers [i] === server ) {
						$scope.servers.splice(i, 1);
					}
				}
			} else {
				$scope.server.$remove(function() {
					$location.path('servers');
				});
			}
		};

		// Update existing Server
		$scope.update = function() {
			var server = $scope.server ;

			server.$update(function() {
				$location.path('servers/' + server._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Servers
		$scope.find = function() {
			$scope.servers = Servers.query();
		};

		// Find existing Server
		$scope.findOne = function() {
			$scope.server = Servers.get({
				serverId: $stateParams.serverId
			});
		};
	}
]);
