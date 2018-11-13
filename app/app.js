var myRepairApp = angular.module('myRepairApp', ['ngRoute', 'ngAnimate', 'ngResource']);

myRepairApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'RepairController'
    })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'GalleryController'   
    })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
   })
      .when('/recommend', {
        templateUrl: 'views/recommend.html',
        controller: 'RecommendController'
   })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
      .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
    })
       .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
        
    })
       .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'LoginController'
        
    }).otherwise({
        redirectTo: '/home'
    });    
     
}]);
    

myRepairApp.controller('RepairController', ['$scope', '$http', function($scope, $http){
    
   
    $http.get('data/translation_en.json').then(function (response) {
        $scope.repairTitle = response.data.repairTitle;
        $scope.repairs = response.data.repairs;
        
    });
     
}]);


myRepairApp.controller('GalleryController', ['$scope', '$http', function($scope, $http){
    
    $http.get('data/translation_en.json').then(function (response) {
        $scope.galleries = response.data.galleries;
    });
    
   //  console.log(angular.toJson($scope.galleries));
     
}]);


myRepairApp.controller('AboutController', ['$scope', '$http', function($scope, $http){
   
    $http.get('data/translation_en.json').then(function (response) {
        $scope.aboutTitle = response.data.aboutTitle;
        $scope.abouts = response.data.abouts;
        $scope.advantages = response.data.advantages;
    });
      
}]);


myRepairApp.controller('RecommendController', ['$scope', '$http', function($scope, $http){
    
   $http.get('data/translation_en.json').then(function (response) {
        $scope.recommends = response.data.recommends;
    });
    
}]);

myRepairApp.controller('ContactController', ['$scope', '$http', '$location', function($scope, $http, $location){
    
     $http.get('data/translation_en.json').then(function (response) {
        $scope.contactForm = response.data.contactForm;
        $scope.contact = {};
    });
    
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    };
}]);


myRepairApp.controller('TranslationController',['$scope', 'translationService', 
function ($scope, translationService){  

  //Выполняем перевод, если произошло событие смены языка
  $scope.translate = function(lang){
      $scope.lang = lang;
      console.log($scope.lang); 
      translationService.getTranslation($scope, $scope.lang);
   };
   // Инициализация
 //  $scope.selectedLanguage = 'en';
    $scope.translate('en');
    
    /*//Выполняем перевод, если произошло событие смены языка
  $scope.translate = function(lang){
      console.log($scope.selectedLanguage); 
      translationService.getTranslation($scope, $scope.selectedLanguage);
   };
   // Инициализация
 //  $scope.selectedLanguage = 'en';
   $scope.translate();*/
  
}]);


/*myRepairApp.controller('LoginController', ['$scope', '$location', function($scope, $location){
    $scope.submit = function(){
        var name =  $scope.defaultLoginFormUserName;
        var password = $scope.defaultLoginFormPassword;
        if($scope.name == 'admin' &&  $scope.password == 'admin'){
            $location.path('/dashboard');
        } else {
            alert('Wrong Stuff');
        }
        
    };

}]);*/

/*myRepairApp.controller('LoginController', ['$scope', function($scope){
   $scope.submit = function(){
        var name =  $scope.defaultLoginFormUserName;
        var password = $scope.defaultLoginFormPassword;
        if($scope.name == 'admin' &&  $scope.password == 'admin'){
            $location.path('/dashboard');
        } else {
            alert('Wrong Stuff');
        }
        
    };

}]);*/



