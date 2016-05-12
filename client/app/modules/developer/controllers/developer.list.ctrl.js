(function () {
  'use strict';

  angular
    .module('com.module.developer')
    .controller('DeveloperListCtrl', function ($scope, CoreService, uiGridConstants,DevelopersService) {

      $scope.ctrl = {};

      $scope.ctrl.statusRender = function(status) {
          if (status == 0) {
            return "未认证";
          } else if (status == 1) {
            return "审核中";
          } else if (status == 2) {
            return "认证未通过";
          } else if (status == 3) {
            return "已认证";
          }
      }

      $scope.ctrl.typeRender = function(type) {
        if (type == 0) {
          return "个人";
        } else if (type == 1) {
          return "个人";
        } else if (type == 2) {
          return "企业";
        }
      }

      var fetchDeveloper = function() {
        DevelopersService.find(10, function(data){
          $scope.ctrl.developers = data;
        });
      };

      fetchDeveloper();
    });
})();
