define(["angularAMD","angular-route","appConfig"],function(e){var t=angular.module("app",["ngRoute"]);return t.config(["$routeProvider",function(t){t.when("/serial",e.route({templateUrl:"../views/serial.html",controller:"ctrlIndex"})).otherwise({redirectTo:"/"})}]),e.bootstrap(t)});