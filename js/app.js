var titledbApp = angular.module('titledbApp', []);

titledbApp.controller('TitleListController', function TitleListController($scope, $http) {
  $http.get('https://api.titledb.com/v0').then(function(response){
    $scope.titles = response.data;
  });
});
