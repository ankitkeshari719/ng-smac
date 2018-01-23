angular
    .module('ngSmac')
    .service('smacService',function ($http) {
        function getServiceSmacs() {
            return $http.get('scripts/data/data.json');
        }

        return {
            getServiceSmacs: getServiceSmacs
        }
    });