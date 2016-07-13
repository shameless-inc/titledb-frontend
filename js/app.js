var titledbApp = angular.module('titledbApp', []);

titledbApp.controller('TitleListController', function TitleListController($scope, $http) {
  $http.get('https://api.titledb.com/v0').then(function(response){
    $scope.titles = response.data.sort(function(a, b){
      if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    });
  });
});
