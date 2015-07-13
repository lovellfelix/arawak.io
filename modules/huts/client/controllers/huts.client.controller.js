'use strict';

// Huts controller
angular.module('huts').controller('HutsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Huts', 'MyHuts', 'Servers', 'Socket',
  function($scope, $stateParams, $location, Authentication, Huts, MyHuts, Servers, Socket) {
    $scope.authentication = Authentication;
		$scope.servers = Servers.query();

    // Create new Hut
    $scope.create = function() {
      // Create new Hut object
      var hut = new Huts({
        name: this.name,
        product: this.product,
				server: this.server

      });

      // Redirect after save
      hut.$save(function(response) {
        $location.path('huts/' + response._id);

        // Clear form fields
        $scope.name = '';
        $scope.product = '';
        $scope.server = '';

      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Hut
    $scope.remove = function(hut) {

      if (hut) {
        hut.$remove();

        for (var i in $scope.huts) {
          if ($scope.huts[i] === hut) {
            $scope.huts.splice(i, 1);
          }
        }
      } else {
        $scope.hut.$remove(function() {
          $location.path('dashboard');
        });
      }

    };

    // Update existing Hut
    $scope.update = function() {
      var hut = $scope.hut;
      hut.$update(function() {
        $location.path('huts/' + hut._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Huts
    $scope.find = function() {
      $scope.huts = Huts.query();
    };

    // Find a list of Huts by user
    $scope.findMyHuts = function() {
      $scope.huts = MyHuts.query();
    };

    // Find existing Hut
    $scope.findOne = function() {
      $scope.hut = Huts.get({
        hutId: $stateParams.hutId
      });
    };

    $scope.createHut = function() {
      var name = document.getElementById('name').value;
      // var dbType = document.getElementById('dbtype').value;
      // var dbName = 'lovell',
      var dbType = 'monogodb';

      Socket.emit('createHut', {
        name: name,
        type: dbType
      });

    };
		// Delete application container
    $scope.deleteHut = function(name) {
      Socket.emit('deleteHut', {
        name: name
      });
    };

    // Remove the event listener when the controller instance is destroyed
    $scope.$on('$destroy', function() {
      Socket.removeListener('createHut');
      Socket.removeListener('deleteHut');
    });

  }
]);
