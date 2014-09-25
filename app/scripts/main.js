/*jshint unused: vars */
require.config({
    paths: {
        zepto: '../../bower_components/zepto/zepto',
        angular: '../../bower_components/angular/angular',
        angularAMD: '../../bower_components/angularAMD/angularAMD',
        'angular-route': '../../bower_components/angular-route/angular-route',
        'angular-touch': '../../bower_components/angular-touch/angular-touch',
        appConfig: 'config',
        ctrlIndex: 'controllers/index',
        ctrlSerial: 'controllers/serial',
        ctrlCartype: 'controllers/cartype'
    },
    shim: {
        zepto: {
            exports: '$'
        },
        angular: {
            exports: 'angular'
        },
        'angular-route': [
            'angular'
        ],
        'angular-touch': ['angular']
    },
    deps: [
        'app'
    ]
});


