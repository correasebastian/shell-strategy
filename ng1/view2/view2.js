'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    // templateUrl: 'view2/view2.html',
    template: `<p>This is the partial for view 2.</p>
              <p>
                Showing of 'interpolate' filter:
                {{ 'Current version is v%VERSION%.' | interpolate }}
              </p>`,
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);
