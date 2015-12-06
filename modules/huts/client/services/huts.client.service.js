'use strict';

//Huts service used to communicate Huts REST endpoints
var app = angular.module('huts');

app.factory('Huts', ['$resource',
  function($resource) {
    return $resource('api/huts/:hutId', {
      hutId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

//Huts service used to communicate Huts REST endpoints
app.factory('MyHuts', ['$resource',
  function($resource) {
    return $resource('api/huts/me');
  }
]);
