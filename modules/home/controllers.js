'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope','$http','$localStorage',
    function ($scope,$http,$localStorage) {
        $localStorage.products = $localStorage.products == undefined ? 	$http.get('data.json').then(function(res){ 
              $localStorage.products=res.data.products;
			})  : $localStorage.products;

    }]);