define(['app', 'appConfig'], function (app, appConfig) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:MainCtrl
     * @description
     */
    app.controller('ctrlCartype', ['$rootScope', '$scope', '$http',
        function($rootScope, $scope, $http) {
            // 页面开始变化时
            $rootScope.$on('$routeChangeStart', function(){
                // 是否显示页面加载提示
                $rootScope.loading = true;
            });

            // 页面加载成功后
            $rootScope.$on('$routeChangeSuccess', function(){
                // 是否显示页面加载提示
                $rootScope.loading = false;
            });

            // header, footer和container的fixed关系，以及是否显示header和footer
            $rootScope.fixedHd = '';
            $rootScope.fixedFt = 'fixedFt';
            $rootScope.fixedHdFt = '';
            $rootScope.hideHd = true;
            $rootScope.showFt = true;

            $http({method: 'GET', url: appConfig.apiList.brandList.url}).
                success(function(data) {
                    $scope.item = data;
                }).
                error(function() {
                    console.log('error!');
                });

            $scope.newItem = {};

            $scope.save = function(){
                var a = new Date().getTime();
                var b = new Date().getTime();

                $scope.newItem.time = b - a;
            };
        }]);
});
