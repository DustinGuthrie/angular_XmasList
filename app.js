(function () {
  "use strict";

  angular
    .module('xmasList', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          // template: '<h1>Merry Christmas!</h1><a href="#/xmasList">Start creating a List</a><button ng-click="alertMe()">alert me</button>{{msg}}',
          templateUrl: 'views/christmasLists/home.html',
          controller: 'MainController'
        })
        .when('/xmasList', {
          templateUrl: 'views/christmasLists/list.html',
          controller: 'XmasListsController'
        })
        // .when('/books/:bookId', {
        //   templateUrl: 'views/books/show.html',
        //   controller: 'BooksController'
        // })
        // .when('/books/:bookId/edit', {
        //   templateUrl: 'views/books/edit.html',
        //   controller: 'BooksController'
        // })
        .when('/addList', {
          templateUrl: 'views/christmasLists/create.html',
          controller: 'XmasListsController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });




})();
