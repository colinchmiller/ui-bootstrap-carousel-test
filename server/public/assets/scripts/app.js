var mainApp = angular.module('mainApp', ['ui.bootstrap.carousel']);

mainApp.controller('TestController', function(){
  console.log("TestController firing!");
});

mainApp.controller('ProtoCarousel', ['$scope', function($scope){
  console.log("ProtoCarousel running!");
  $scope.name = "Colin Miller"
  $scope.myInterval = 3000;
  $scope.slides = [
    {image: "https://www.fillmurray.com/200/300"},
    {image: "https://www.fillmurray.com/200/400"},
    {image: "https://www.fillmurray.com/300/300"}
  ];
}]);
