(function () {
  "use strict";
  angular
    .module('cart')

    .factory('CartService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/cartlist';

      var addCart = function (newCart) {
        console.log("addCart service firing CartService", newCart);
        delete newCart._id;
        $http.post(url, newCart).then(function (res) {
          console.log(res);
        });
      };
      var getCarts = function () {
        return $http.get(url);
      };
      var deleteCart = function (idx) {
        $http.delete(url + '/' + idx).then(function (res) {
          console.log(res);
        });
      };

      return {
        addCart: addCart,
        getCarts: getCarts,
        deleteCart: deleteCart
      };

  });



})();
