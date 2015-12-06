(function () {
  "use strict";
  angular
    .module('cart')

    .factory('CartService', function ($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/cart';

      var addCart = function (newCart) {
        delete newCart._id;
        $http.post(url, newCart).then(function (res) {
          console.log(res);
        });
      };
      var getCarts = function () {
        return $http.get(url);
      };
      var deleteCart = function (idx) {
        // console.log(idx._id);
        $http.delete(url + '/' + idx._id).then(function (res){
          console.log(res);
          // console.log(url + '/' + idx._id);
        });
      };

      return {
        createCart: addCart,
        getCarts: getCarts,
        deleteCart: deleteCart
      };

  });



})();
