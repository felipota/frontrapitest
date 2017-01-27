'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Car', []);
angular.module('Marca', []);
angular.module('Referencia', []);


angular.module('RappiFrontTest', [
    'Authentication',
    'Home',
    'Marca',
	'Car',
    'Referencia',
    'ngRoute',
    'ngCookies',
    'ngStorage'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
 
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })
        .when('/marca',{
                    controller: 'MarcaController',
                    templateUrl: 'modules/marca/views/marca.html'
                })
		.when('/carrito',{
                    controller: 'CarController',
                    templateUrl: 'modules/carrito/views/carrito.html'
                })
        .when('/referencia',{
                    controller: 'ReferenciaController',
                    templateUrl: 'modules/referencia/views/referencia.html'
                })
		
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
