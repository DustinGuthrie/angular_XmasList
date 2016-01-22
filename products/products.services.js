(function () {
  "use strict";
  angular
    .module('products')

    .factory('XmasListService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/guthriexmasList';

      var addList = function (newList) {
        console.log(newList);
        $http.post(url, newList).then(function (res) {
          console.log(res);
        });
      };
      var getLists = function () {
        // console.log(url);
        return $http.get(url);
      };
      // var deleteItem = function (idx) {
      //   return $http.delete(url + '/' + idx);
      // };
      return {
        addList: addList,
        getLists: getLists,
        // deleteItem: deleteItem
      };


  });



})();
