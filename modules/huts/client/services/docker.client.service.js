'use strict';

//Huts service used to communicate Huts REST endpoints
// angular.module('huts').factory('Docker', ['$resource','DOCKER_API',
// 	function($resource, DOCKER_API) {
// 		return $resource('//elcina.arawak.space/api/containers/:hutId', { hutId: '@_id'
// 		}, {
// 			list: {
// 				method: 'GET',
//         headers:{
//                'Access-Control-Allow-Origin': '*',
// 							// 'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
// 							'Access-Control-Allow-Methods': 'GET',
//               'Access-Control-Allow-Headers': 'Content-Type',
// 				    	// 'Content-Type': 'application/x-www-form-urlencoded',
//               'Access-Control-Allow-Credentials': true,
//               'X-Service-Key': DOCKER_API.SERVICE_KEY
//
//
//           }
// 			}
// 		});
// 	}
// ]).value('DOCKER_API',{
//     END_POINT: 'http://45.55.162.183:8080/api/',
//     SERVICE_KEY: 'Rh5Lu0liocbgeMKw8iu51d3kASvaN0b6p/ti',
//     REST_API_KEY:'XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY'
// });

// .config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ])


// .config(['$routeProvider', ,'$httpProvider', function($routeProvider, $httpProvider) {
//     $httpProvider.defaults.useXDomain = true;
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     ....
//   }
// ])

var app = angular.module('huts');

// app.factory('Docker1', function($resource) {
//             return $resource('http://elcina.arawak.space/api/');
//         }).factory('Docker', function($resource) {
//             return $resource('http://elcina.arawak.space/api/containers/:id/:action', {id: '@id' }, {
//                 destroy: { method: 'DELETE' },
//                 'save': { isArray: true, method: 'POST' },
//                 'control': { isArray: false, method: 'GET' },
//
//                 query: {
//                         method: 'GET',
//                         headers: {
//                           'Content-Type': 'application/x-www-form-urlencoded',
//                           'X-Mcf-Client' : 'web',
//                           'X-Service-Key': 'Rh5Lu0liocbgeMKw8iu51d3kASvaN0b6p/ti'
//
//                         }
//                       }
//             });
//         });
//
//
//
//     app.factory('Docker', function($resource) {
//         return $resource('http://elcina.arawak.space/api/containers/', { }, {
//             query: {
//                 method: 'GET',
//                 isArray: true,
//                 headers: { 'API-Token': '1234' }
//             }
//         });
//         return User
//     });


// app.factory("Contact", function($resource) {
//   return $resource("/api/contacts/:id", { id: "@_id" },
//     {
//       'create':  { method: 'POST' },
//       'index':   { method: 'GET', isArray: true },
//       'show':    { method: 'GET', isArray: false },
//       'update':  { method: 'PUT' },
//       'destroy': { method: 'DELETE' }
//     }
//   );
// });


//
// angular.module('huts', ['ngResource').
//     factory('RealMen', function($resource){
//     return $resource('http://localhost\\:3000/realmen/:entryId', {}, {
//       query: {method:'GET', params:{entryId:''}, isArray:true},
//       post: {method:'POST'},
//       update: {method:'PUT'},
//       remove: {method:'DELETE'}
//     });

//
app.factory('Docker',['$http','DOCKER_API',function($http, DOCKER_API){
    return {
        query:function(){
            return $http.get('http://elcina.arawak.space/api/containers',{
                headers:{
                    'X-Service-Key': DOCKER_API.SERVICE_KEY
                }
            });
        },
        get:function(id){
            return $http.get('http://45.55.162.183:8080/api/'+id,{
                headers:{
                    'X-Service-Key': DOCKER_API.SERVICE_KEY
                }
            });
        },
        create:function(data){
            return $http.post('https://api.parse.com/1/classes/Todo',data,{
                headers:{
                    'X-Service-Key': DOCKER_API.SERVICE_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('http://45.55.162.183:8080/api/'+id,data,{
                headers:{
                    'X-Service-Key': DOCKER_API.SERVICE_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('http://45.55.162.183:8080/api/'+id,{
                headers:{
                    'X-Service-Key': DOCKER_API.SERVICE_KEY,
                    'Content-Type':'application/json'
                }
            });
        }
    };
}]).value('DOCKER_API',{
    SERVICE_KEY: 'Rh5Lu0liocbgeMKw8iu51d3kASvaN0b6p/ti',
    REST_API_KEY:'XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY'
});
