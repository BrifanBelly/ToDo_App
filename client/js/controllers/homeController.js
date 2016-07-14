myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/bulb.jpg"
    },
    {
        image: "img/green.jpg"
    },
    {
        image: "img/moutan.jpg"
    },
    {
        image: "img/poles.jpg"
    }];
}]);