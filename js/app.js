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

function enableQrCodes(){
  $('.qr-collapse').on('show.bs.collapse', function (event) {
    var title = angular.element(event.target).scope().title;
    $(event.target).qrcode({text:'http://titledb.com/api/v0/proxy/' + title.titleid});
  });
  $('.qr-collapse').on('hidden.bs.collapse', function (event) {
    $(event.target).empty();
  });
}

$('document').ready(function(){
  $('body').on("show.bs.collapse", ".qr-collapse", function(event){
    var title = angular.element(event.target).scope().title;
    console.log(event);
    $(event.target).qrcode({text:'http://titledb.com/api/v0/proxy/' + title.titleid});
  });
  $('body').on("hidden.bs.collapse", ".qr-collapse", function(event){
    $(event.target).empty();
  });
});
