angular.module('eatApp')
	.controller('searchController', function($scope, $rootScope, $location, foursquareService) {

		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			$rootScope.query = query					// Here we save the user input in $rootScope for use in the next page
			$rootScope.location = location					// Here we save the user input in $rootScope for use in the next page
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$rootScope.venues = data
				})
			$location.path('/search/')				//At the end go to the '/search/' location
		}
	})
