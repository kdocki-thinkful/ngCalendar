'use strict';

describe('directive', function(){
  var elm, scope;

  beforeEach(module('ngCalendar'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element(
      '<div class="calendar-container">' +
        '<div my-calendar="currentDate" ng-class="{outer: !isCurrentMonth(day.date)}" class="ng-binding ng-scope calendar-cell outer">' +
          '29' +
        '</div>' +
        '<div my-calendar="currentDate" ng-class="{outer: !isCurrentMonth(day.date)}" class="ng-binding ng-scope calendar-cell outer">' +
          '30' +
        '</div>' +
        '<div my-calendar="currentDate" ng-class="{outer: !isCurrentMonth(day.date)}" class="ng-binding ng-scope calendar-cell outer">' +
          '31' +
        '</div>' +
        '<div my-calendar="currentDate" ng-class="{outer: !isCurrentMonth(day.date)}" class="ng-binding ng-scope calendar-cell outer">' +
          '1' +
        '</div>' +
        '<div my-calendar="currentDate" ng-class="{outer: !isCurrentMonth(day.date)}" class="ng-binding ng-scope calendar-cell outer">' +
          '2' +
        '</div>' +
      '</div>');
    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should ??', function() {
    expect(??).toBe(??);
  });


});
