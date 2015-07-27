angular.module('zhibags',['ui.router','zhibags.controllers'])

.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state(
        'home',{
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
        }
    )
        .state(
        'admin',{
            url: '/admin',
            templateUrl: '/admin.html',
            controller: 'AdminCtrl'
        }
    )
    $urlRouterProvider.otherwise('home');
}]);