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

        /*o.changePrice = function(bag,dif) {
            return $http.put('/bags/' + bag._id + '/changePrice')
                .success(function(data){
                    bag.price += Math.round((this.price*dif)/100);
                });
        };*/

        o.get = function(id){
            return $http.get('/bags/'+id).then(function(res){
                return res.data;
            });
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
            })
        };

        o.create = function(quote){
            return  $http.post('/quotes',quote).success(function(data){
                o.quotes.push(data);
            });
        };

        o.remove = function(quote){
            return $http.delete('/quotes',quote).success(function(data){
                o.quotes.splice(data);
            })
        }
        return o;
    }]);
