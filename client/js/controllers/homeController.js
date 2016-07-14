myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/s.jpg"
    },
    {
        image: "img/wq.jpg"
    },
    {
        image: "img/d.jpg"
    },
    {
        image: "img/q.jpg"
    }];
}]);