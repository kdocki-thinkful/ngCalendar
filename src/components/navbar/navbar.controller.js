'use strict';

angular.module('ngCalendar')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
