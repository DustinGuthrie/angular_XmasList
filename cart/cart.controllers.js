(function () {

  angular
    .module('cart')


      .controller('XmasCartController', function ($scope, CartService, XmasListService){

        var vm = this;


        CartService.getCarts().success(function (xmasCart) {
          console.log(xmasCart);
          console.log(xmasCart.length);

          this.xmasListCart = xmasCart;
          console.log(xmasListCart);
          $scope.numberOfItems = vm.getNumberInCart();
        });
          vm.getNumberInCart = function(){
          var numberinCart = xmasListCart.length;
          // console.log(numberinCart);
          return numberinCart;
        };
          vm.deleteMe = function (idx) {
            console.log("Im being deleted!");
            console.log(idx);
            CartService.deleteCart(idx);
        };

        });




})();
