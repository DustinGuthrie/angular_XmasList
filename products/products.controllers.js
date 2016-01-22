(function () {

  angular
    .module('products')

    .controller('XmasListsController', function ($scope, XmasListService, CartService){

      var vm = this;
      console.log(vm);

      XmasListService.getLists().success(function (xmasList) {
        console.log("This is the getLists from XmasListService running",xmasList);
        vm.xmasListExamples = xmasList;
        // $scope.getCountNumber = $scope.getCount();
        // $scope.numberOfItems = vm.getNumber();
      });
        vm.addList = function (newList) {
          console.log("addList firing products controller",newList);
          XmasListService.addList(newList);
          $location.path("/list");
        };
        vm.addCart = function (newCart) {
          console.log("addCart product controller firing",newCart);
          CartService.addCart(newCart);
        };

        });




})();
