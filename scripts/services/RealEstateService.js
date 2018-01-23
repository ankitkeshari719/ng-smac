angular
    .module('ngSmac')
    .service('RealEstateService',function ($http) {
        function getRealEstateService() {
            return $http.get('data/firm.json');
        }

        return {
            getRealEstateService: getRealEstateService
        }
    });