(function () {

  angular
    .module('xmasList')
    .controller('MainController', function ($scope) {
      $scope.alertMe = function () {
        _.times(10, function () {
          console.log("hello everyone!");
        });
      };
          $scope.msg = "this is a secret message";
    })
    .controller('XmasListsController', function ($scope, XmasListService){

      XmasListService.getLists().success(function (xmasList) {
        // console.log(xmasList);
        $scope.xmasListExamples = xmasList;
      });

      $scope.xmasListExamples = [
             {
               title: "The Art of War",
               cover: "http://www.returnofkings.com/wp-content/uploads/2015/01/sun-tzu.jpg",
               description: "strategy stuff"
             },
             {
               title: "ng-Book",
               cover: "http://ecx.images-amazon.com/images/I/712vyspLr8L.jpg",
               description: "angular book"
             }
           ];

        $scope.addList = function (newList) {
          // console.log(newList);
          XmasListService.createList(newList);
        };
      });



})();
