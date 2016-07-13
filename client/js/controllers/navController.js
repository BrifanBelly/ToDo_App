myApp.controller('navController', ['$scope','ifauthService', '$location', function($scope, ifauthService, $location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
    $scope.isAuth = ifauthService.get();
    console.log('in nav'+$scope.isAuth);

    $scope.logout = function(){
        console.log('clicked');
        ifauthService.set(false);
        $location.path('localhost:3000');
    }
}])