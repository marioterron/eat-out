angular.module('eatApp')
	.controller('resultsController', function($scope, foursquareService) {

		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			$scope.imgSize = '512.png'
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venues = data
				})
		}
	})
