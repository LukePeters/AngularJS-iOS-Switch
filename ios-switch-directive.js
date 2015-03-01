// The iOS switch directive
angular.module('app').directive('iosSwitch', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    template: '<span class="iosSwitchInner"><span class="iosSwitchHandle"></span></span>'
  };
});