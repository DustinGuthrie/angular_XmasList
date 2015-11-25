(function () {

  angular
    .module('xmasList')
    .controller('MainController', function ($scope) {


    })
    .controller('XmasListsController', function ($scope, XmasListService, CartService){

      XmasListService.getLists().success(function (xmasList) {
        console.log(xmasList);
        $scope.xmasListExamples = xmasList;
        // $scope.getCountNumber = $scope.getCount();
        $scope.numberOfItems = $scope.getNumber();


      });
        $scope.addList = function (newList) {
          // console.log(newList);
          XmasListService.createList(newList);
        };
        $scope.addCart = function (newCart) {
          console.log(newCart);
          CartService.createCart(newCart);
        };
        // $scope.getCount = function(){
        //   var numberCart = $scope.xmasListExamples.length;
        //   console.log(numberCart);
        //   return numberCart;
        // };

      })

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
        // $scope.getTotal = function () {
        //   var totalinCart = $scope.xmasListCart
        //   console.log(newCart);
        //   CartService.createCart(newCart);
        //   };
          $scope.deleteMe = function (idx) {
            console.log("Im being deleted!");
            console.log(idx);
            CartService.deleteCart(idx);
        };
          // $scope.cartItems = function() {
          //   var number = 0;
          //   number += guthriexmasList.length;
          //   console.log(number);
          //   return number;
          // };

        });




})();
