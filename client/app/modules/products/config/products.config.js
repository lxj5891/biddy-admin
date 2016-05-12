(function () {
  'use strict';
  angular
    .module('com.module.products')
    .run(function ($rootScope, Product, Category, gettextCatalog) {
      // $rootScope.addMenu(gettextCatalog.getString('Products'), 'app.products.list', 'fa-file');
    });

})();
