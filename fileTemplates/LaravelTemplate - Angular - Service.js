/**
 * @ngdoc service
 * @name 
 *
 *
 * @description
 * Add your Description
 */
 
const angular      = require('angular'),
  ngModuleName = '$NAME',
  ngModule     = angular.module(ngModuleName, [])
;


ngModule.service('$NAME', [function service() {
    var _service = {};
        

    return _service;
}]);

module.exports = ngModuleName;
