(function (){

	'use strict';

	// Angular Module
	angular.module('Portfolio', ['ngRoute', 'ngAnimate'])

	.config( function ($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'scripts/portfolio.html',
			controller: 'MainController'
		})

		.when('/resume', {
			templateUrl: 'scripts/resume.html',
			controller: 'MainController'
		})

		.otherwise({
			redirectTo: '/'
		});

	});

}());

(function (){

	'use strict';

	angular.module('Portfolio')

		.controller('MainController', ['$scope', '$location', '$anchorScroll',
			function ($scope, $location, $anchorScroll){

				// Scroll Function
				$scope.scrollTo = function (id) {
					$location.hash(id);
      		$anchorScroll();
				};

				$(document).ready( function(){
					$(".fadeIO").each(function (i) {
			  		$(this).delay(i * 1000).fadeIn().delay(i * 200).fadeOut();
					});

					$('.headline').each(function (i) {
						$(this).delay(4000).fadeIn();
					});
				});

			}

		]);

}());