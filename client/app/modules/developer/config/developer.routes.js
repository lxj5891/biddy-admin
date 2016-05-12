(function () {

  'use strict';

  angular
    .module('com.module.developer')
    .config(function ($stateProvider) {

      $stateProvider
      .state('app.developer', {
        abstract: true,
        url: '/developer',
        templateUrl: 'modules/developer/views/main.html'
      })
      .state('app.developer.list', {
        url: '',
        templateUrl: 'modules/developer/views/list.html',
        controller: 'DeveloperListCtrl',
        resolve: {}
      })
      .state('app.developer.add', {
        url: '',
        templateUrl: 'modules/developer/views/from.html',
        controller: 'DeveloperAddCtrl'
      })
      .state('app.developer.edit', {
        url: '/edit/:id',
        templateUrl: 'modules/developer/views/from.html',
        controller: 'DeveloperEditCtrl',
        resolve: {
          developer: function ($stateParams, DevelopersService) {
            console.log("find developer ")
            return DevelopersService.findById($stateParams.id);
          }
        }
      })
      .state('app.developer.delete', {
        url: '/:id/delete',
        template: '',
        controller: function ($stateParams, $state, DevelopersService) {
          DevelopersService.delete($stateParams.id, function () {
            $state.go('^.list');
          }, function () {
            $state.go('^.list');
          });
        }
      })
    });
})();
