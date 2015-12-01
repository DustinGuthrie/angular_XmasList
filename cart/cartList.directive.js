(function () {
  "use strict";
  angular
    .module('xmasList')
    .directive('cartitem', function () {
      return {
        restrict: 'E',
        templateUrl: 'cart/cartList.directive.html',
        scope: {
          cart: '=',
          action: '&'
        },
        transclude: true
      };
    });


})();
