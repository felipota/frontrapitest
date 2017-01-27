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
<<<<<<< HEAD
							$localStorage.carrito.splice(cont,1);
=======
							delete $localStorage.carrito[cont];
>>>>>>> 22349e4c037b322eec0d1d78b62ca38256554113
						}
					}
					cont++;
			  });
			   $scope.carritos = $localStorage.carrito;
		  };
		  

    }]);
