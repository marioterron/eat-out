angular.module('eatApp')
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('')				// For fix URL issues "/!#/" -> "/#/"
		$routeProvider
			.when('/', {
				templateUrl: 'templates/home.html',
				controller: 'searchController'
			})
			.when('/search/', {
				templateUrl: 'templates/results.html',
				controller: 'resultsController'
			})
			.when('/search/:idVenue', {
				templateUrl: 'templates/details.html',
				controller: 'detailsController'
			})
	})
