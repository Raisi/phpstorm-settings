/**
 * @ngdoc directive
 * @name 
 *
 * @restrict $RESTRICT
 *
 * @description
 * Add your Description
 */
 
const angular      = require('angular'),
  ngModuleName = '$NAME',
  ngModule     = angular.module(ngModuleName, [])
;


ngModule.directive('$NAME', [function directive() {
    var _directive = {};
        
    _directive.restrict = '$RESTRICT';

    /**
     * The directive will replace its own DOM-Element
     * @type {boolean}
     */
    //_directive.replace = false;

    /**
     * The directive will transclude its original
     * @type {boolean}
     */
    //_directive.transclude = false;

    /**
     * The directives template
     * @type {string}
     */
    //_directive.template = '';

    /**
     * Define DataBinding
     */
    //_directive.scope = {};

    /**
     * The Directive link function
     */
    //_directive.link = function(scope, element, attrs, controller) {};

    //_directive.controllerAs = '$CONTROLLER_AS';
    /*_directive.controller = [function controller() {
        var _controller = this;
        
        (function init() {
        
        }());    
    }];*/

    return _directive;
}]);

module.exports = ngModuleName;
