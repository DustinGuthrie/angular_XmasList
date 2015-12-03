(function () {

  angular
    .module('products')

    .controller('XmasListsController', function ($scope, XmasListService, CartService){

      var vm = this;

      XmasListService.getLists().success(function (xmasList) {
        console.log(xmasList);
        vm.xmasListExamples = xmasList;
        // $scope.getCountNumber = $scope.getCount();
        // $scope.numberOfItems = vm.getNumber();
      });
        vm.addList = function (newList) {
          // console.log(newList);
          XmasListService.createList(newList);
        };
        vm.addCart = function (newCart) {
          console.log(newCart);
          CartService.createCart(newCart);
        };

        });




})();
