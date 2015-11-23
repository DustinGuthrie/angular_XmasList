(function () {
  "use strict";
  angular
    .module('xmasList')
    .factory('XmasListService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/guthriexmasList';

      var addList = function (newList) {
        $http.post(url, newList).then(function (res) {
          console.log(res);
        });
      };

      var getLists = function () {
        return $http.get(url);
      };

      return {
        createList: addList,
        getLists: getLists
      };
    });


})();
