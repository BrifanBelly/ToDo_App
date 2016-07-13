myApp.controller('authController', ['$scope','$location','authService','ifauthService', function($scope,$location,authService,ifauthService){
    $scope.message = "";
    $scope.addToDatabase = function(){
        authService('/auth/users/signup').save({}, $scope.user,
            function(data){
                ifauthService.set(data.username);
                $location.url('/home');
            },
            function(err){
                $scope.message = 'please enter a valid email id';
               // bootbox.alert('Error: ' + err);
            });
    };

    $scope.CheckUser = function(){
        authService('auth/users/signin').save({},$scope.user,
            function(data){
                ifauthService.set(data.username);
          $location.url('/home');
        },function(error){
                $scope.message = 'Username or Password is incorrect . Please type correct Username or Password';
        });




    };


}]);

