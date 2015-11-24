(function () {

  angular
    .module('xmasList')
    .controller('MainController', function ($scope) {


    })
    .controller('XmasListsController', function ($scope, XmasListService){

      XmasListService.getLists().success(function (xmasList) {
        console.log(xmasList);
        $scope.xmasListExamples = xmasList;
      });

      // $scope.xmasListExamples = [
      //        {
      //          name: "Mason",
      //          gift: "Superman",
      //          photo: "http://ecx.images-amazon.com/images/I/61et-3daZYL._SL1052_.jpg",
      //          store: "Amazon",
      //          price: "$11.99",
      //          online: "http://www.amazon.com/Comics-Heroes-Superman-Action-Figure/dp/B00FZM40YK/ref=sr_1_2?ie=UTF8&qid=1448329915&sr=8-2&keywords=superman"
      //        },
      //        {
      //          name: "Mason",
      //          gift: "Baseball Glove",
      //          photo: "http://ecx.images-amazon.com/images/I/51VqFOSQKXL.jpg",
      //          store: "Amazon",
      //          price: "$16.11",
      //          online: "http://www.amazon.com/Easton-Z-Flex-Glove-Right-10-Inch/dp/B005FVDBLO/ref=sr_1_1?ie=UTF8&qid=1448329890&sr=8-1&keywords=baseball+glove+kids"
      //
      //        }
      //      ];

        $scope.addList = function (newList) {
          // console.log(newList);
          XmasListService.createList(newList);
        };
        $scope.deleteMe = function (idx) {
          console.log("Im being deleted!");
          console.log(idx);
           $scope.xmasList.data.splice(idx, 1);

      };

      });



})();
