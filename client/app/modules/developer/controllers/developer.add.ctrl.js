(function () {
  'use strict';

  angular
    .module('com.module.developer')
    .controller('DeveloperAddCtrl', function ($scope, $state, DevelopersService, UserService) {

      $scope.ctrl = {};
      $scope.ctrl.formOptions = {};
      $scope.ctrl.developer = {};
      $scope.ctrl.formFields = DevelopersService.getFormFields('add');

      $scope.ctrl.submit = function () {
        console.log($scope.ctrl.developer);
        DevelopersService.create($scope.ctrl.developer).then(function () {
          $state.go('^.list');
        }).catch(function (err) {
          console.log(err);
        });
      };

      $scope.ctrl.back = function() {
        $state.go('^.list');
      }

    });
})();
