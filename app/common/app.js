(function () {
  "use strict";

  angular
    .module('xmasList',[
      'ngRoute',
      'products',
      'cart'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          // template: '<h1>Merry Christmas!</h1><a href="#/xmasList">Start creating a List</a><button ng-click="alertMe()">alert me</button>{{msg}}',
          templateUrl: 'views/christmasLists/home.html',
          controller: 'MainController as mainCtrl'
        })
        // .when('/xmasList', {
        //   templateUrl: 'views/christmasLists/list.html',
        //   controller: 'XmasListsController'
        // })
        // .when('/cart', {
        //   templateUrl: 'views/christmasLists/cart.html',
        //   controller: 'XmasCartController'
        // })
        // .when('/addList', {
        //   templateUrl: 'views/christmasLists/create.html',
        //   controller: 'XmasListsController'
        // })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });

})();
