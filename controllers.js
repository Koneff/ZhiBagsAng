angular.module('zhibags.controllers',['zhibags.services'])
    .controller('MainCtrl', [
        '$scope',
        'bags',
        function($scope, bags){
            //$scope.bags = bags.bags;

            $scope.bags = [
                'post 1',
                'post 2',
                'post 3',
                'post 4',
                'post 5'
            ];

            }
        ])

    .controller('AdminCtrl', [
        '$scope',
        'bags',
        function($scope, bags){
            $scope.bags = bags.bags;

        }
    ])