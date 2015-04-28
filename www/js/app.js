// Ionic Starter App dfgdfgdsfgds
//teste

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.contactos', {
    url: "/contactos",
    views: {
      'menuContent': {
        templateUrl: "templates/contactos.html",
		controller: 'ContactosCtrl'
      }
    }
  })
    .state('app.inicio', {
      url: "/inicio",
      views: {
        'menuContent': {
          templateUrl: "templates/inicio.html",
		  controller: 'InicioCtrl'
        }
      }
    })
	
	  .state('app.viaturas', {
      url: "/inicio/viaturas",
      views: {
        'menuContent': {
          templateUrl: "templates/viaturas.html"
        }
      }
    })
	
	.state('app.campanhas', {
      url: "/inicio/campanhas",
      views: {
        'menuContent': {
          templateUrl: "templates/campanhas.html"
        }
      }
    })
	
	.state('app.cartao', {
      url: "/inicio/cartao",
      views: {
        'menuContent': {
          templateUrl: "templates/cartao.html"
        }
      }
    })
	
	.state('app.localizacao', {
      url: "/inicio/localizacao",
      views: {
        'menuContent': {
          templateUrl: "templates/localizacao.html",
		  controller:'ListCtrl'
        }
      }
    })

	.state('app.perfil', {
      url: "/perfil",
      views: {
        'menuContent': {
          templateUrl: "templates/perfil.html",
		  controller: 'PerfilCtrl'
        }
      }
    })
	
	.state('app.definicoes', {
      url: "/definicoes",
      views: {
        'menuContent': {
          templateUrl: "templates/definicoes.html",
		  controller: 'DefinicoesCtrl'
        }
      }
    })
	
	.state('app.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
		  controller: 'AppCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});


