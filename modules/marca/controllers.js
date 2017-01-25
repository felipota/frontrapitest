'use strict';
 
angular.module('Marca')
 
.controller('MarcaController',
    ['$scope','$http','$rootScope','$localStorage',
    function ($scope,$http,$rootScope,$localStorage) {
   
        $http.get('data.json')
          .then(function(res){ 
              $scope.categories = res.data.categories;
			  $scope.products = res.data.products;
			  
          })
          
    $scope.myFunc = function(id,categorie) {
        $localStorage.message=categorie;
        $localStorage.categorie=id;
		$localStorage.products= $scope.products;
    };
    }]);
