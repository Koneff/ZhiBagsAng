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
            controller: 'AdminCtrl',
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
        'bags',{
            url: '/bags/{id}',
            templateUrl: '/bags.html',
            controller: 'BagsCtrl',
            resolve: {
                bag: ['$stateParams','bags',function($stateParams,bags){
                    return bags.get($stateParams.id);
                }]
            }

        });

    $urlRouterProvider.otherwise('home');
}]);