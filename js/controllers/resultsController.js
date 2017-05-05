angular.module('eatApp')
	.controller('resultsController', function($scope, $rootScope, foursquareService) {

		$scope.imgSize = '512.png';
		$scope.searchQuery = function() {
			var query = $scope.query
			var location = $scope.location
			$rootScope.query = query					// Here we save the user input in $rootScope for use in the next page
			$rootScope.location = location					// Here we save the user input in $rootScope for use in the next page
			foursquareService.getVenues(query, location)
				.then(function(data) {
					$scope.venues = data
				})
		}
	})
