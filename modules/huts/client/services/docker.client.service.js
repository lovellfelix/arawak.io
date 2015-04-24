'use strict';

//Huts service used to communicate Huts REST endpoints
angular.module('huts').factory('Docker', ['$resource','DOCKER_API',
	function($resource) {
		return $resource('http://45.55.162.183:8080/api/containers/:hutId', { hutId: '@_id'
		}, {
			list: {
				method: 'GET',
        headers:{
              'Access-Control-Allow-Origin' : '*',
              'Content-Type':'application/json',
              'X-Service-Key': 'Rh5Lu0liocbgeMKw8iu51d3kASvaN0b6p/ti',
          }
			}
		});
	}
]).value('DOCKER_API',{
    END_POINT: 'http://45.55.162.183:8080/api/',
    SERVICE_KEY: 'xhTpJiNedJ7mmDj3LTTBUePqSVegcJHzEbh70Y0Q',
    REST_API_KEY:'XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY'
});



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


// angular.module('huts',[]).factory('Docker',['$http','DOCKER_API',function($http, DOCKER_API){
//     return {
//         getAll:function(){
//             return $http.get('http://45.55.162.183:8080/api/containers',{
//                 headers:{
//                     'X-Service-Key': DOCKER_API.SERVICE_KEY
//                 }
//             });
//         },
//         get:function(id){
//             return $http.get('http://45.55.162.183:8080/api/'+id,{
//                 headers:{
//                     'X-Service-Key': DOCKER_API.SERVICE_KEY
//                 }
//             });
//         },
//         create:function(data){
//             return $http.post('https://api.parse.com/1/classes/Todo',data,{
//                 headers:{
//                     'X-Service-Key': DOCKER_API.SERVICE_KEY,
//                     'Content-Type':'application/json'
//                 }
//             });
//         },
//         edit:function(id,data){
//             return $http.put('http://45.55.162.183:8080/api/'+id,data,{
//                 headers:{
//                     'X-Service-Key': DOCKER_API.SERVICE_KEY,
//                     'Content-Type':'application/json'
//                 }
//             });
//         },
//         delete:function(id){
//             return $http.delete('http://45.55.162.183:8080/api/'+id,{
//                 headers:{
//                     'X-Service-Key': DOCKER_API.SERVICE_KEY,
//                     'Content-Type':'application/json'
//                 }
//             });
//         }
//     }
// }]).value('DOCKER_API',{
//     END_POINT: 'http://45.55.162.183:8080/api/',
//     SERVICE_KEY: 'xhTpJiNedJ7mmDj3LTTBUePqSVegcJHzEbh70Y0Q',
//     REST_API_KEY:'XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY'
// });
