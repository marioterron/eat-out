angular.module('eatApp')
    .controller('detailsController', function($scope, $routeParams, foursquareService) {

        var idVenue = $routeParams.idVenue
        $scope.idVenue = idVenue
		// When you do click in search button
		$scope.showDetails = function() {
			var idVenue = $scope.idVenue
			// $rootScope.imgSize = '512.png'
			foursquareService.getVenueDetails(idVenue)
				.then(function(data) {
					$scope.details = data
					console.log(data)
				})
		 }
    })
