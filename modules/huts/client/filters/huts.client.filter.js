'use strict';

angular.module('huts').filter('Huts', [
  function() {
    return function(input) {
      // Huts directive logic
      // ...
      // var hut = $scope.hut ;

      return 'Huts filter: ' + input;
    };
  }
]);
