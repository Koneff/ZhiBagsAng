angular.module('zhibags.services',[])
    .factory('bags', ['$http',function($http){
        var o = {
            bags: []
        };

        o.getAll = function(){
            return $http.get('/bags').success(function(data){
                angular.copy(data, o.bags);
            })
        };

        o.create = function(bag){
            return  $http.post('/bags',bag).success(function(data){
                o.bags.push(data);
            });
        };


        o.get = function(id){
            return $http.get('/bags/'+id).then(function(res){
                return res.data;

            });
        };
        o.upprice = function(bag) {
            return $http.put('/bags/' + bag._id + '/upprice').success(function(data){
                bag.price += 5;
            });
        };

        o.change = function(bag){
            return $http.put('/bags/' + bag._id + '/change').success((function($scope,data){
                bag = {
                    title: $scope.title,
                    desc: $scope.desc,
                    pic: $scope.pic,
                    price: $scope.price
                };

            }))
        };
        return o;
    }])

    .factory('quotes', ['$http',function($http){
        var o = {
            quotes: []
        };

        o.getAll = function(){
            return $http.get('/quotes').success(function(data){
                angular.copy(data, o.quotes);
            });
        };

        o.create = function(quote){
            return  $http.post('/quotes',quote).success(function(data){
                o.quotes.push(data);
            });
        };
        return o;
    }]);
