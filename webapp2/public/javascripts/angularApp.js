require('angular');
require('angular-route');
require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');
var app = angular.module('DonationWebApp', ['ngRoute']);
require('./controllers/index');


app.config(['$routeProvider', function($routeProvider) {  //HERE
//app.config(function ($routeProvider) {
  $routeProvider
  // route for the home page
    .when('/', {
      templateUrl: 'public/pages/home.ejs',
      controller: 'mainController'
    })
    // route for the donate page
    .when('/donate', {
      templateUrl: 'public/pages/donate.ejs',
      controller: 'donateController'
    })
    // route for the donations page
    .when('/donations', {
      templateUrl: 'public/pages/donations.ejs',
      controller: 'donationsController'
    })
    // route for the about page
    .when('/about', {
      templateUrl: 'public/pages/about.ejs',
      controller: 'aboutController'
    })
    // route for the contact page
    .when('/contact', {
      templateUrl: 'public/pages/contact.ejs',
      controller: 'contactController'
    })
    .when('/login', {
      templateUrl: 'public/pages/login.ejs',
      controller: 'contactController'
    })
    .when('/viewReceipe', {
      templateUrl: 'public/pages/receipe.ejs',
      controller: 'viewReceipeController'
    })
    .when('/search', {
      templateUrl: 'public/pages/search.ejs',
      controller: 'searchController'
    })
    .when('/login', {
      templateUrl: 'public/pages/login.ejs',
      controller: 'loginController'
    })
    .when('/signUp', {
      templateUrl: 'public/pages/signup.ejs',
      controller: 'signupController'
    })
    .when('/newest', {
      templateUrl: 'public/pages/latest.ejs',
      controller: 'latestController'
    });
//});
}]);
