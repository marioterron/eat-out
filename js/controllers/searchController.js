angular.module('eatApp')
	.controller('searchController', function($scope, $rootScope, $location, foursquareService) {

		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			$rootScope.query = query
			$rootScope.location = location
			$rootScope.imgSize = '512.png'
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venues = data
					$rootScope.venues = $scope.venues
				})
			$location.path('/search/')
		}
	})
