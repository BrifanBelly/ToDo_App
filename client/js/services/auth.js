myApp.factory('authService', ['$resource', function($resource){
    return function(url){
      return $resource(url, {id: '@id'});
    }

      // User: $resource('/auth/users/:id', {id: '@id'})

}]);