
'use strict';app.controller('mainCtrl',['getDataFromDB',function(getDataInDB){var _this=this;getDataInDB.getData().$promise.then(function(responce){_this.data=responce.results;});}]);