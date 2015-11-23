(function () {
  "use strict";

  angular
    .module('xmasList', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>hello angular</h1><a href="#/xmasList">go to the list</a><button ng-click="alertMe()">alert me</button>{{msg}}',
          controller: 'MainController'
        })
        .when('/xmasList', {
          templateUrl: 'views/xmasList/list.html',
          controller: 'BooksController'

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
          templateUrl: 'views/books/create.html',
          controller: 'BooksController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });




})();
