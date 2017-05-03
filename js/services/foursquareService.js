	angular.module('eatApp')
		.factory('foursquareService', function($http) {

			function _getVenues(query, location) {
				var url = 'https://api.foursquare.com/v2/venues/search?v=20170501&near=' + location + '&query=' + query + '&categoryId=4d4b7105d754a06374d81259&client_id=IXSMMTKC1C0EOWTOMSINDGHJLA12LXXLVIBH3J4DSKL5I3VW&client_secret=WK55K10UKPAJVGZKFI1XNCORVSKRYRLLWKFQ4TDO2U01AR2V'
				return $http.get(url)
					.then(function(response) {
						return response.data.response.venues
					})
					// Filter if the venue not includes address
					.then(function(venues) {
						return venues.filter(function(oVenue) {
							return oVenue.location.address != undefined;
						})
					})
					// Filter if the venue includes the word "baño"
					.then(function(venues) {
						return venues.filter(function(oVenue) {
							return oVenue.name.toLowerCase().includes('baño') != true;
						})
					})
			}

			return {
				getVenues: _getVenues
			}
		})
