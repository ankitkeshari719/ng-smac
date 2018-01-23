angular
    .module('ngSmac')
    .controller('RealEstateController',function ($scope,RealEstateService) {
        $scope.priceInfo  = {
            min : 0,
            max: 1000000
        };

        RealEstateService.getRealEstateService().then(function (response) {
            $scope.cribs = response.data;
        }, function(error) {
            console.log(error.json)
        });
    });