// (function () {
//   "use strict";
//   angular
//     .module('xmasList')
//     .factory('XmasListService', function ($http) {
//       var url = 'http://tiny-tiny.herokuapp.com/collections/guthriexmasList';
//
//       var addList = function (newList) {
//         $http.post(url, newList).then(function (res) {
//           // console.log(res);
//         });
//       };
//       var getLists = function () {
//         return $http.get(url);
//       };
//       // var deleteItem = function (idx) {
//       //   return $http.delete(url + '/' + idx);
//       // };
//       return {
//         createList: addList,
//         getLists: getLists,
//         // deleteItem: deleteItem
//       };
//     })
//
//     .factory('CartService', function ($http) {
//       var url = 'http://tiny-tiny.herokuapp.com/collections/cart';
//
//       var addCart = function (newCart) {
//         $http.post(url, newCart).then(function (res) {
//           console.log(res);
//         });
//       };
//       var getCarts = function () {
//         return $http.get(url);
//       };
//       var deleteCart = function (idx) {
//         return $http.delete(url + '/' + idx);
//       };
//
//       return {
//         createCart: addCart,
//         getCarts: getCarts,
//         deleteCart: deleteCart
//       };
//
//   });
//
//
//
// })();
