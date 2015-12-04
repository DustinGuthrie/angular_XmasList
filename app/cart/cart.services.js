(function () {
  "use strict";
  angular
    .module('cart')

    .factory('CartService', function ($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/cart';

      var addCart = function (newCart) {
        $http.post(url, newCart).then(function (res) {
          console.log(res);
        });
      };
      var getCarts = function () {
        return $http.get(url);
      };
      var deleteCart = function (idx) {
        return $http.delete(url + '/' + idx);
      };

      return {
        createCart: addCart,
        getCarts: getCarts,
        deleteCart: deleteCart
      };

  });



})();
