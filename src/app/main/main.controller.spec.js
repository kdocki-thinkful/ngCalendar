'use strict';

describe('calendar directive', function(){
  var scope, html, template, element;

  beforeEach(module('ngCalendar'));

  beforeEach(inject(function($rootScope, $compile)
  {
    scope = $rootScope.$new();
    scope.currentDate = new Date('April 27 2015');
    html = '<div><div my-calendar="currentDate"></div></div>';
    template = $compile(html);
    element = angular.element(template(scope));
    scope.$digest();
  }));

  it('should compile html correctly for the calendar', function() {
    var html = element.html();
    expect(html).toBe('<!-- myCalendar: currentDate --><div class="calendar-container"><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div><div my-calendar="currentDate" class="ng-scope calendar-cell"></div></div>');
  });

  it('should update the calendar whenever the date changes', function() {

    var oldHtml = element.html();
    scope.currentDate = new Date('May 10, 2015');
    scope.$digest();
    expect(oldHtml).not.toBe(element.html());
  });

});
