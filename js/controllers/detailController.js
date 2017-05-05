angular.module('eatApp')
	.controller('detailController', function($scope, $routeParams, foursquareService) {

		var idVenue = $routeParams.idVenue				// Get the idVenue from the current URL
		$scope.showDetails = function() {
			foursquareService.getVenueDetails(idVenue)
				.then(function(data) {
					$scope.details = data
				})
		}
	})
