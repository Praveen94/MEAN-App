var app = angular.module('meanApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/home.html',
        controller: 'homeController'
    }).when('/create', {
        templateUrl: './views/create.html',
        controller: 'createController'
    });
});
