(function () {

  angular
    .module('cart')


      .controller('XmasCartController', function ($scope, CartService, XmasListService){

        CartService.getCarts().success(function (xmasCart) {
          console.log(xmasCart);
          console.log(xmasCart.length);

          $scope.xmasListCart = xmasCart;
          $scope.numberOfItems = $scope.getNumberInCart();
        });
        $scope.getNumberInCart = function(){
          var numberinCart = $scope.xmasListCart.length;
          console.log(numberinCart);
          return numberinCart;
        };
          $scope.deleteMe = function (idx) {
            console.log("Im being deleted!");
            console.log(idx);
            CartService.deleteCart(idx);
        };

        });




})();
