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
            $scope.quotes = quotes.quotes;
           // $scope.bag = bag;
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


            $scope.percentagePrice = function(){
                if(!$scope.dif || $scope.dif === 0) { return; }
              var perc = {
                    dif: $scope.dif
                }
                console.log(perc.dif+'%')
            }

            $scope.addQuote = function(){
                if(!$scope.quote || $scope.quote === '') { return; }
                quotes.create({
                    quote: $scope.quote,
                    author: $scope.author
                });
                $scope.quote = '';
                $scope.author = '';
            };

        }

    ])

    .controller('BagsCtrl',[
    '$scope',
    'bags',
    'bag',
    function($scope,bags,bag){
        $scope.bag = bag;
        $scope.title = bag.title;
        $scope.desc = bag.desc;
        $scope.pic = bag.pic;
        $scope.price = bag.price;
        console.log(bag);

        $scope.incrementPrice = function(bag){
            bags.upprice(bag);
            console.log(bags.upprice(bag))
        };
        $scope.changeBag = function(bag){
            bags.change(bag);
            console.log(bags.change(bag));
        }
    }
]);