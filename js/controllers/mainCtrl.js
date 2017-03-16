'use strict';
app.controller('mainCtrl', ['getDataFromDB', function (getDataInDB) {

   getDataInDB.getData().$promise.then((responce) =>{
        this.data = responce.results;
    });

}]);