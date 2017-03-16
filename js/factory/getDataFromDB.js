app.factory('getDataFromDB', ['$resource', 'BaseUrl', function ($resource, BaseUrl) {
    class getData{
        constructor(){
            this.objectQuety = $resource('', {}, {
               get:{
                   method: 'GET',
                   url: BaseUrl + '?results=10'
               }
            });
        }
        getData(){
            return this.objectQuety.get();
        }
    }

    return new getData;
}]);