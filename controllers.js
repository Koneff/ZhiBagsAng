angular.module('zhibags.controllers',['zhibags.services'])
    .controller('MainCtrl', [
        '$scope',
        'bags',
        function($scope, bags){
            $scope.bags = bags.bags;


            }
        ])

    .controller('AdminCtrl', [
        '$scope',
        'bags',
        'quotes',
        function($scope, bags,quotes){
            $scope.bags = bags.bags;
            $scope.quotes = quotes.quotes;
            $scope.addBag = function(){
                if(!$scope.title || $scope.title === '') { return; }
                $scope.bags.push({
                    title: $scope.title,
                    desc: $scope.desc,
                    pic: $scope.pic,
                    price: 140
                });
                $scope.title = '';
                $scope.desc = '';
                $scope.pic = '';
            };

            $scope.addQuote = function(){
                if(!$scope.quote || $scope.quote === '') { return; }
                $scope.quotes.push({
                    quote: $scope.quote,
                    author: $scope.author
                });
                $scope.quote = '';
                $scope.author = '';

            };

            $scope.changePrice = function(bag){

            };
        }

    ])