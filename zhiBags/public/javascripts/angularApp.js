angular.module('zhibags',['ui.router','zhibags.controllers'])

.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state(
        'home',{
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl',
            resolve: {
                bagPromise: ['bags', function (bags) {
                    return bags.getAll();
                }],
                quotePromise: ['quotes', function (quotes) {
                    return quotes.getAll();
                }]
            }
        }
    )
        .state(
        'admin',{
            url: '/admin',
            templateUrl: '/admin.html',
            controller: 'AdminCtrl'
        }
    );
    $urlRouterProvider.otherwise('home');
}]);