angular.module('eatApp')
	.controller('searchController', function($scope, foursquareService) {

		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venueList = data
					console.log(data)
				})
			$scope.query = ''
			$scope.location = ''
		}
	})
