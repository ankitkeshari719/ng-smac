angular
    .module('ngSmac')
    .service('smacService',function ($http) {
        function getServiceSmacs() {
            return $http.get('data/data.json');
        }

        return {
            getServiceSmacs: getServiceSmacs
        }
    });