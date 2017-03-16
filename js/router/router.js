app.config(['$routeProvider',function ($routeProvider) {

    $routeProvider
        .when('/',{
            templateUrl: '/template/main.html',
        })
        .otherwise({
            redirectTo: '/'
        })
}]);
