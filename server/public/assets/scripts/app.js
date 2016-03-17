var mainApp = angular.module('mainApp', ['ngAnimate','ui.bootstrap']);

angular.module('mainApp').controller('ProtoCarousel', ['$scope', function($scope){
  console.log("ProtoCarousel running!");
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [{image: "https://www.fillmurray.com/800/300", id: 0},
  {image: "https://www.fillmurray.com/1000/400", id: 1},
  {image: "https://www.fillmurray.com/1300/300", id: 2}];
  var currIndex = 0;

}]);
