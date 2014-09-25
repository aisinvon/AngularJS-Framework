define(['angularAMD', 'angular-route', 'angular-touch', 'appConfig'], function (angularAMD) {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngTouch']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', angularAMD.route({
                templateUrl : '../views/main.html',
                controller  : 'ctrlIndex'
            }))
            .when('/serial', angularAMD.route({
                templateUrl : '../views/serial.html',
                controller  : 'ctrlSerial'
            }))
            .when('/cartype', angularAMD.route({
                templateUrl : '../views/cartype.html',
                controller  : 'ctrlCartype'
            }))
            .otherwise({
                redirectTo: '/'
            });
    }]);

    return angularAMD.bootstrap(app);
});
