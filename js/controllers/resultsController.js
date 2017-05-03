angular.module('eatApp')
	.controller('resultsController', function($scope, foursquareService) {

		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venues = data
				})
		}
	})
