var app=angular.module("myApp",[ 'ui.router']);
		app.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
            $urlRouterProvider.otherwise('/home');
				$stateProvider
					.state('home', {
						url: '/home',
						templateUrl: 'views/home.html',
                        // var absUrl = $location.absUrl()
                    })
					.state('about', {
                        url: '/about',
						templateUrl: 'views/about.html'
                    })
            $locationProvider.html5Mode(true);
});