(function () {
  'use strict';
  angular
    .module('com.module.developer')
    .service('DevelopersService', function ($http, $state, CoreService ,Developer, gettextCatalog) {

      var that = this;

      that.find = function (pageNum, pageSize ,callback) {
        Developer.find({"filter": {"limit": pageSize}}, function(data){
          callback(data);
        });
      };

      that.findById = function(id) {
        return Developer.findById({id: id}).$promise;
      };

      that.delete = function (id, successCb, cancelCb) {
        CoreService.confirm("确认删除吗？", "删除后不能撤销哦",
          function () {
            Developer.deleteById({id: id}, function () {
                CoreService.toastSuccess("开发者删除成功","这个开发者已经被删除！");
                successCb();
            },
            function (err) {
              CoreService.toastError('开发者删除失败', '这个开发者没有被删除！! ' + err);
              cancelCb();
            });
          },
          function () {
            cancelCb();
          }
        );
      };

      that.upsert = function(developer) {
        return Developer.upsert(developer).$promise
          .then(function () {
            CoreService.toastSuccess("开发者修改成功", "开发者修改成功");
          })
          .catch(function (err) {
            CoreService.toastError("开发者修改失败", "开发者修改失败" + err );
          }
        );
      };

      that.create = function (developer) {
        return Developer.create(developer).$promise
          .then(function () {
            CoreService.toastSuccess("开发者创建成功", "开发者创建成功");
          })
          .catch(function (err) {
            CoreService.toastError("开发者创建失败", "开发者创建失败" + err );
          }
        );
      };

      that.getFormFields = function (formType) {
        var form = [
          {
            key: 'user_id',
            type: 'input',
            templateOptions: {
              label: "用户ID",
              required: true
            }
          },
          {
            key: 'contact_name',
            type: 'input',
            templateOptions: {
              label: "姓名",
              required: true
            }
          },
          {
            key: 'contact_telephone',
            type: 'input',
            templateOptions: {
              label: "电话",
              required: true
            }
          },
          {
            key: 'contact_email',
            type: 'input',
            templateOptions: {
              label: "邮箱",
              required: true
            }
          },
          {
            key: 'type',
            type: 'input',
            templateOptions: {
              label: "类型",
              required: true
            }
          },
          {
            key: 'status',
            type: 'input',
            templateOptions: {
              label: "状态",
              required: false
            }
          }
        ];
        return form;
      };
    });
})();
