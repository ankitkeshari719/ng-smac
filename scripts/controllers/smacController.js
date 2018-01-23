angular
    .module('ngSmac')
    .controller('smacController',function ($scope,smacFactory,smacService) {
       $scope.smacFactoryData = smacFactory.getFactorySmacs();

       smacService.getServiceSmacs().then(function (response) {
            $scope.smacServiceData = response.data;
        }, function(error) {
            console.log(error.json)
        });


    });