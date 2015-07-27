angular.module('zhibags.services',[])
    .factory('bags', [function(){
        var o = {
            bags: []
        };
        return o;
    }])

    .factory('quotes', [function(){
        var o = {
            quotes: []
        };
        return o;
    }])
