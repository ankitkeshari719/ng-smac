angular
    .module('ngSmac')
    .controller('smacController',function ($scope) {
        $scope.smac = {};
        $scope.smac.hello = "Hello ng-smac!";
        $scope.smac.data = [
            {
                'price':1,
                'quantity':10
            },
            {
                'price':2,
                'quantity':20
            },
            {
                'price':3,
                'quantity':30
            }
        ];
    });