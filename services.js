angular.module('zhibags.services',[])
    .factory('bags', [function(){
        var o = {
            bags: []
        };
        return o;
    }]);