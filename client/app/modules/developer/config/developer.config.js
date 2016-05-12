(function () {
  'use strict';
  angular
    .module('com.module.developer')
    .run(function ($rootScope, Developer, gettextCatalog) {
      $rootScope.addMenu("开发者", 'app.developer.list', 'fa-file');

      // 获得开发者数量
      Developer.count(function (o) {
        $rootScope.addDashboardBox("开发者", 'bg-yellow', 'fa-connectdevelop', o.count, 'app.developer.list');
      });
    });
})();
