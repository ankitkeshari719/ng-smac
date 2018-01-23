angular
    .module('ngSmac')
    .factory('smacFactory',function () {
        var smacData = [
            {
                'name': 'Ankit',
                'project': 'Impetus',
                'practice': 'SMAC'
            },
            {
                'name': 'Abhay',
                'project': 'Impetus',
                'practice': 'SMAC'
            },
            {
                'name': 'Basant',
                'project': 'Impetus',
                'practice': 'SMAC'
            }
        ];

        function getFactorySmacs() {
            return smacData;
        }

        return {
            getFactorySmacs: getFactorySmacs
        }
    });




    /* var data = [];
       return {
           saveData: function(key, val){
               data[key] = val;
           },
           getData: function(key){
               return data[key];
           },
           deleteData: function(key){
               return data[key] = null;
           },
           deleteAll: function(){
               return data = [];
           }
       }*/
