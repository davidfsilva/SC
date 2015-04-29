angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
	var user = $scope.loginData.username;
	var pass = CryptoJS.MD5($scope.loginData.password);
	
	$http({
        method: 'GET',
        url: 'http://app-salvadorcaetano.rhcloud.com/login.php?jsoncallback&user='+ user +'&pass='+ pass +''
        }).success(function(data) {
				if(data.validacao == "OK")
				{
					alert("entrou");
					
				}else{
					alert("password errada");
				}
        }).error(function(data) {
            alert("falhou");
        });
  };
})

.controller('ListCtrl', function($scope, $http) {

	$scope.selections = "";
$scope.localizacoes = [
		{id:'Escolha', name:'Escolha um Distrito'},
		{id:'Aveiro', name:'Aveiro'},
		{id:'Beja', name:'Beja'},
		{id:'Braga', name:'Braga'},
		{id:'Bragança', name:'Bragança'},
		{id:'Castelo Branco', name:'Castelo Branco'},
		{id:'Coimbra', name:'Coimbra'},
		{id:'Évora', name:'Évora'},
		{id:'Faro', name:'Faro'},
		{id:'Guarda', name:'Guarda'},
		{id:'Leiria', name:'Leiria'},
		{id:'Lisboa', name:'Lisboa'},
		{id:'Portalegre', name:'Portalegre'},
		{id:'Porto', name:'Porto'},
		{id:'Santarém', name:'Santarém'},
		{id:'Setúbal', name:'Setúbal'},
		{id:'Viana do Castelo', name:'Viana do Castelo'},
		{id:'Vila Real', name:'Vila Real'},
		{id:'Viseu', name:'Viseu'}
	];	
	$scope.selections = $scope.localizacoes[0].name;

$scope.buscaLocalizacao = function(varia) {
	
	$http({
            method: 'GET',
            url: 'http://app-salvadorcaetano.rhcloud.com/localizacao.php?jsoncallback&distrito='+ varia+''
        }).success(function(data) {
            $scope.items = data; // response data 

        }).error(function(data) {
            console.log("failed");
        });
};		
})

.controller('CardCtrl', function($scope, $ionicModal, $http) {
  // Form data for the login modal
  $scope.CardData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/LocalizacaoCard.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeCard = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openCard = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLocalizacaoCard = function() {
  
  };
})

 .controller('PerfilCtrl', function ($scope) {
	$scope.PerfilnavTitle = 'PERFIL <span class="navbar-right"><i class=" icon ion-person"></i></span>'; 
})

 .controller('InicioCtrl', function ($scope) {
	$scope.InicionavTitle = 'Início <span class="navbar-right"><i class=" icon ion-home"></i></span>'; 
})

 .controller('DefinicoesCtrl', function ($scope) {
	$scope.DefinicoesnavTitle = 'Definições <span class="navbar-right"><i class=" icon ion-gear-b"></i></span>'; 
})

 .controller('ContactosCtrl', function ($scope) {
	$scope.ContactosnavTitle = 'Contactos <span class="navbar-right"><i class=" icon ion-ios-telephone"></i></span>'; 
})