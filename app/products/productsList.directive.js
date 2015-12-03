(function () {
  "use strict";
  angular
    .module('xmasList')
    .directive('xmasListitem', function () {
      return {
        restrict: 'E',
        templateUrl: 'products/productList.directive.html',
        scope: {
          guthriexmasList: '=',
          action: '&'
        },
        transclude: true
      };
    });


})();
