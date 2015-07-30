angular.module('zhibags.controllers',['zhibags.services'])
    .controller('MainCtrl', [
        '$scope',
        'bags',
        'quotes',
        function($scope, bags, quotes){
            $scope.bags = bags.bags;
            $scope.quotes = quotes.quotes;
            //console.log($scope.quotes)
            }
        ])

    .controller('AdminCtrl', [
        '$scope',
        'bags',
        'quotes',
        function($scope, bags,quotes){
            $scope.bags = bags.bags;
            $scope.dif = bags.dif;
            $scope.quotes = quotes.quotes;
            $scope.addBag = function(){
                if(!$scope.title || $scope.title === '') { return; }
                bags.create({
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
                quotes.create({
                    quote: $scope.quote,
                    author: $scope.author
                });
                $scope.quote = '';
                $scope.author = '';
                console.log($scope.quotes);
            };

            $scope.deleteQuote = function(quote){
                quotes.remove(quote);
                console.log(quotes);
            };

            $scope.percentagePrice = function(bag,dif){
                //bags.changePrice(bag,dif);
                $scope.dif = {
                    value: dif.value
                }
            };
        }

    ])

    .controller('BagsCtrl',[
    '$scope',
    'bags',
    'bag',
    function($scope,bags,bag){
        //$scope.isLoggedIn = auth.isLoggedIn;
        $scope.bag = bag;
    }
]);