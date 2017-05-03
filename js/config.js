angular.module('eatApp')
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('')
		$routeProvider
			.when('/', {
				templateUrl: '/templates/home.html',
				controller: 'searchController'
			})
			.when('/results', {
				templateUrl: '/templates/results.html',
				controller: 'searchController'
			})
	})
