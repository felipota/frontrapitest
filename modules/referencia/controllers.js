'use strict';
 
angular.module('Referencia')
.controller('ReferenciaController',
    ['$scope','$http','$rootScope','$localStorage',
    function ($scope,$http,$rootScope,$localStorage) {

            $scope.products = [];
			$localStorage.message = $localStorage.message == undefined ? "Todos los productos" : $localStorage.message;
			$scope.categorie = $localStorage.message;
			$localStorage.products = $localStorage.products == undefined ? 	$http.get('data.json').then(function(res){ 
              $localStorage.products=res.data.products;
			})  : $localStorage.products;
			$localStorage.categorie = $localStorage.categorie == undefined ? 0 : $localStorage.categorie;
			angular.forEach($localStorage.products, function(event) {
					event.available = event.available == false ? "No Disponioble" : "";
					event.best_seller = event.best_seller == true ? "Best Seller" : "";
					angular.forEach(event.categories, function(event2){
						if (event2 == $localStorage.categorie) {
							$scope.products.push(event);
						}
					});
					if($localStorage.categorie == 0)
						$scope.products.push(event);
			});
      
		  $localStorage.carrito=[];
		  $scope.addProducts = function(idProduct,name,price)
		  {
			  var cant = 1;
			  var cont = 0
			  angular.forEach($localStorage.carrito,function(event) {
					if(event.id == idProduct)
					{
						$localStorage.carrito[cont].cant = $localStorage.carrito[cont].cant + 1;
						cant++;
					}
					cont++;
			  });
			  if(cant == 1 )
			  {
					var productarray = {"id" : idProduct, "name" : name,"price" : price,"cant" : cant};
					$localStorage.carrito.push(productarray);
			  }
		  }
		  

    }]);
