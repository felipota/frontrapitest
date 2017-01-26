'use strict';
 
angular.module('Referencia')
.controller('ReferenciaController',
    ['$scope','$http','$rootScope','$localStorage','$filter',
    function ($scope,$http,$rootScope,$localStorage,$filter) {
			console.log($localStorage.products)
            $scope.products = [];
			$scope.filter = "available";
			$localStorage.message = $localStorage.message == undefined ? "Todos los productos" : $localStorage.message;
			$scope.categorie = $localStorage.message;
			$localStorage.products = $localStorage.products == undefined ? 	$http.get('data.json').then(function(res){ 
              $localStorage.products=res.data.products;
			})  : $localStorage.products;
			$localStorage.categorie = $localStorage.categorie == undefined ? 0 : $localStorage.categorie;
			angular.forEach($localStorage.products, function(event) {
					event.available = event.available == false ? "No Disponioble" : "";
					event.best_seller = event.best_seller == true ? "Best Seller" : "";
					event.price = parseFloat(event.price);
					angular.forEach(event.categories, function(event2){
						if (event2 == $localStorage.categorie) {
							$scope.products.push(event);
						}
					});
					if($localStorage.categorie == 0)
						$scope.products.push(event);
			});
					  
		  $localStorage.carrito = $localStorage.carrito  ==  undefined ? [] : $localStorage.carrito;
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

		  };
		  $scope.orderFunction = function(filtro,reverse){
			  $scope.filter = filtro;
			  $scope.reverse = reverse;
			   $scope.cfiltro="";
		  };
		  $scope.filtrador = function(field, condition)
				{
					 $scope.products = [];
						var value=0;
						angular.forEach($localStorage.products, function(event) {
									event.price = parseFloat(event.price);
									
									if (condition == undefined)
											value = event[field] ;
									else if (condition == "!" )
										value = eval(!event[field]);
									else
										value = eval(event[field] + condition);
								if(value)
								{
									event.available = event.available == false ? "No Disponioble" : "";
									event.best_seller = event.best_seller == true ? "Best Seller" : "";
									$scope.products.push(event);
								}
							
						});
						return $scope.products;
				}
		  $scope.myFilter = function (item) {
					  switch (item) {
				case 1:
							return  $scope.filtrador ("price","> 20");
					break;
				case 	2:
							return  $scope.filtrador ("price","< 150");
					break;
				case 	3:
							return  $scope.filtrador ("available" );
					break;
				case 	4:
							return  $scope.filtrador ("available", "!");
					break;
				case 	5:
							return  $scope.filtrador ("best_seller");
					break;
				default:

				}
				
			
			};
	
		  // $filter('buscarproduct')(arg1,arg2);
		  

    }]);
