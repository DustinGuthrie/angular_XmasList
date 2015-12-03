(function () {
  "use strict";

  angular
    .module('products',[
      'ngRoute',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/xmasList', {
          templateUrl: 'views/christmasLists/list.html',
          controller: 'XmasListsController as listCtrl'
        })
        .when('/addList', {
          templateUrl: 'views/christmasLists/create.html',
          controller: 'XmasListsController as listCtrl'
        });
    });

})();
