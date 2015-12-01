(function () {
  "use strict";

  angular
    .module('cart',[
      'ngRoute',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/cart', {
          templateUrl: 'views/christmasLists/cart.html',
          controller: 'XmasCartController'
        });
    });

})();
