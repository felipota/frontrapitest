'use strict';
 
angular.module('Car')
.controller('CarController',
    ['$scope','$http','$rootScope','$localStorage',
    function ($scope,$http,$rootScope,$localStorage) {

          
		  $scope.carritos = $localStorage.carrito;
		  $scope.addProducts = function(idProduct,suma)
		  {
			  var cont = 0
			  angular.forEach($localStorage.carrito,function(event) {
					if(event.id == idProduct)
					{
						$localStorage.carrito[cont].cant = $localStorage.carrito[cont].cant + suma;
						
						if($localStorage.carrito[cont].cant == 0)
						{
							delete $localStorage.carrito[cont];
						}
					}
					cont++;
			  });
			   $scope.carritos = $localStorage.carrito;
		  };
		  

    }]);
