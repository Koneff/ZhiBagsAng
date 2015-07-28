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
        return o;
    }])

    .factory('quotes', [function(){
        var o = {
            quotes: []
        };
        return o;
    }])
