'use strict';

//Setting up route
angular.module('servers').config(['$stateProvider',
  function($stateProvider) {
    // Servers state routing
    $stateProvider.
    state('servers', {
      abstract: true,
      url: '/servers',
      template: '<ui-view/>'
    }).
    state('servers.list', {
      url: '',
      templateUrl: 'modules/servers/client/views/list-servers.client.view.html'
    }).
    state('servers.create', {
      url: '/create',
      templateUrl: 'modules/servers/client/views/create-server.client.view.html'
    }).
    state('servers.view', {
      url: '/:serverId',
      templateUrl: 'modules/servers/client/views/view-server.client.view.html'
    }).
    state('servers.edit', {
      url: '/:serverId/edit',
      templateUrl: 'modules/servers/client/views/edit-server.client.view.html'
    });
  }
]);
