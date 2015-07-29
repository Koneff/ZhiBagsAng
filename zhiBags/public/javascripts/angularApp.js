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
    )

        .state(
        'admin.bags',{
            url: '/bags{id}',
            templateUrl: '/admin-bags.html',
            resolve: {
                bag: ['$stateParams','bags',function($stateParams,bags){
                    return bags.get($stateParams.id);
                }],
                bagPromise: ['bags', function (bags) {
                    return bags.getAll();
                }]
            }

        }
    )

        .state(
        'admin.quotes',{
            url: '/quotes{id}',
            templateUrl: '/admin-quotes.html',
            resolve: {
                quote: ['$stateParams','quotes',function($stateParams,quotes){
                    return quotes.get($stateParams.id);
                }]
            }
        }
    );

    $urlRouterProvider.otherwise('home');
}]);