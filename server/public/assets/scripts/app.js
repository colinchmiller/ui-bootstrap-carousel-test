var mainApp = angular.module('mainApp', ['ngAnimate','ui.bootstrap']);

angular.module('mainApp').controller('ProtoCarousel', ['$scope', function($scope){
  console.log("ProtoCarousel running!");
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.slides = [{image: "https://www.fillmurray.com/800/300", text: "First Murray", id: 0},
  {image: "https://www.fillmurray.com/500/400", text: "Second Murray", id: 1},
  {image: "https://www.fillmurray.com/700/600", text: "Third Murray", id: 2}];
  var currIndex = 0;

}]);
