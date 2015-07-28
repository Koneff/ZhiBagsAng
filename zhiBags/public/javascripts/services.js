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
        return o;
    }])

    .factory('quotes', ['$http',function($http){
        var w = {
            quotes: []
        };

        w.getAll = function(){
            return $http.get('/quotes').success(function(data){
                angular.copy(data, w.quotes);
            })
        };

        w.create = function(quote){
            return  $http.post('/quotes',quote).success(function(data){
                w.quotes.push(data);
            });
        };
        return w;
    }]);
