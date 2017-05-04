angular.module('eatApp')
	.controller('resultsController', function($scope, $rootScope, foursquareService) {

		$scope.imgSize = '512.png';
		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venues = data
				})
		}
	})
