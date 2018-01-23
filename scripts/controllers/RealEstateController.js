angular
    .module('ngSmac')
    .controller('RealEstateController',function ($scope,RealEstateService) {
        $scope.cribs = {};
        $scope.newListing = {};
        $scope.priceInfo  = {
            min : 0,
            max: 1000000
        };
        $scope.addCrib = function(newListing) {
            newListing.image = 'default-crib';
            $scope.cribs.push(newListing);
            $scope.newListing = {};
        };

        RealEstateService.getRealEstateService().then(function (response) {
            $scope.cribs = response.data;
        }, function(error) {
            console.log(error.json)
        });
    });