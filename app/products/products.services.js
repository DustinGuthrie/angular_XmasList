(function () {
  "use strict";
  angular
    .module('products')

    .factory('XmasListService', function ($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/guthriexmasList';

      var addList = function (newList) {
        $http.post(url, newList).then(function (res) {
          // console.log(res);
        });
      };
      var getLists = function () {
        return $http.get(url);
      };
      // var deleteItem = function (idx) {
      //   return $http.delete(url + '/' + idx);
      // };
      return {
        createList: addList,
        getLists: getLists,
        // deleteItem: deleteItem
      };


  });



})();
