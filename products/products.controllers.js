(function () {

  angular
    .module('products')

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

        });




})();
