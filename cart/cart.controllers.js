(function () {

  angular
    .module('cart')


      .controller('XmasCartController', function ($scope, CartService, XmasListService){

        var vm = this;


        CartService.getCarts().success(function (xmasCart) {
          console.log(xmasCart);
          console.log(xmasCart.length);

          vm.xmasListCart = xmasCart;
          console.log(vm.xmasListCart);
          $scope.numberOfItems = vm.getNumberInCart(xmasCart);
        });
          vm.getNumberInCart = function(arg){
          var numberinCart = arg.length;
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
