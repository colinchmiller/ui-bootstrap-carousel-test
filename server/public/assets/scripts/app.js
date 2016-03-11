var mainApp = angular.module('mainApp', ['ui.bootstrap']);

mainApp.controller('TestController', function(){
  console.log("TestController firing!");
});

mainApp.controller('ProtoCarousel', ['$scope', function($scope){
  console.log("ProtoCarousel running!");
  $scope.myInterval = 3000;
  $scope.active = 0;
  $scope.slides = [{image: "https://www.fillmurray.com/200/300"},
  {image: "https://www.fillmurray.com/200/400"},
  {image: "https://www.fillmurray.com/300/300"}];
  var currIndex = 0;

}]);
