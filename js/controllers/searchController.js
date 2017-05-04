angular.module('eatApp')
	.controller('searchController', function($scope, $rootScope, $location, foursquareService) {

		// When you do click in search button
		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			// Here we save the user input in $rootScope for use in the next page
			$rootScope.query = query
			$rootScope.location = location
			$rootScope.imgSize = '512.png'
			// We use the method getVenues to get the promise
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venues = data
					$rootScope.venues = $scope.venues
				})
			$location.path('/search/')					//Go to the '/search/' location
		}
	})
