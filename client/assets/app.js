var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
$routeProvider
  .when('/',{
      templateUrl: 'partials/main.html',
      controller: 'mainController'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
