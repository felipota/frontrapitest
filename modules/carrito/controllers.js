'use strict';
 
angular.module('Car')
.controller('CarController',
    ['$scope','$http','$rootScope','$localStorage',
    function ($scope,$http,$rootScope,$localStorage) {

          
		  $scope.items = $localStorage.carrito;
	
		  
		  $scope.addProducts = function(idProduct)
		  {
			  $localStorage.carrito.push(idProduct);
		  }
		  $scope.dropProducts = function(idProduct)
		  {
			  $localStorage.carrito.push(idProduct);
		  }
		  

    }]);
