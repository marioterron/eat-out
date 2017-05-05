angular.module('eatApp')
	.controller('detailsController', function($scope, $routeParams, foursquareService) {

		var idVenue = $routeParams.idVenue				// Get the idVenue from the current URL
		$scope.idVenue = idVenue
		$scope.showDetails = function() {
			foursquareService.getVenueDetails(idVenue)
				.then(function(data) {
					$scope.details = data
				})
		}
	})
