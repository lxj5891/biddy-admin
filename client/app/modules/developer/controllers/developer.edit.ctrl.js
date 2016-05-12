(function () {
  'use strict';

  angular
    .module('com.module.developer')
    .controller('DeveloperEditCtrl', function ($scope,$state , DevelopersService,developer) {

      $scope.ctrl = {};
      $scope.ctrl.formOptions = {};
      $scope.ctrl.developer = developer || {};
      $scope.ctrl.formFields = DevelopersService.getFormFields('edit');

      $scope.ctrl.submit = function () {
        console.log($scope.ctrl.developer);
        DevelopersService.upsert($scope.ctrl.developer).then(function () {
          $state.go('^.list');
        }).catch(function (err) {
          console.log(err);
        });
      };

      $scope.ctrl.back = function() {
        $state.go('^.list');
      };

    });
})();
