(function($){
  var titledbApp = angular.module('titledbApp', ['angular-loading-bar'])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  }]);

  titledbApp.controller('TitleListController', function TitleListController($scope, $http) {
    $http.get('https://api.titledb.com/v0').then(function(response){
      $scope.titles = response.data.sort(function(a, b){
        if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
        if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        return 0;
      });
    });
  });

  //Filesize filter, credit to https://gist.github.com/yrezgui/5653591
  titledbApp.filter( 'filesize', function () {
    var units = [
      'bytes',
      'KB',
      'MB',
      'GB',
      'TB',
      'PB'
    ];

    return function( bytes, precision ) {
      if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {
        return '?';
      }

      var unit = 0;

      while ( bytes >= 1024 ) {
        bytes /= 1024;
        unit ++;
      }

      return bytes.toFixed( + precision ) + ' ' + units[ unit ];
    };
  });
})();
