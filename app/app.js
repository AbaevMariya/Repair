var myRepairApp = angular.module('myRepairApp', ['ngRoute', 'ngAnimate']);

myRepairApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
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
      .when('/recomend', {
        templateUrl: 'views/recomend.html',
        controller: 'RecomendController'
   })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
      .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
    }).otherwise({
        redirectTo: '/home'
    });    
     
}]);
    

myRepairApp.controller('RepairController', ['$scope', function($scope){
    
    $scope.repairs = [
        {
            typeOfRepair: "Exterior finishing and painting at home",
            thumb: "/content/img/1Exterior.jpg"            
        },
        {
            typeOfRepair: "Repair and erection of the roof",
            thumb: "/content/img/2Roof.png"            
        },
        {
            typeOfRepair: "Warming of walls, waterproofing of walls and roofs",
            thumb: "/content/img/3WarmingWalls.jpg"            
        },
        {
            typeOfRepair: "Working with plasterboard",
            thumb: "/content/img/4Plasterboard.jpg"            
        },
        {
            typeOfRepair: "Whitewashing ceilings and walls",
            thumb: "/content/img/5Ceiling.jpg"            
        },
        {
            typeOfRepair: "Wallpaper gluing, cornices",           
            thumb: "/content/img/6Wallpaper.jpg"            
        },
        {
            typeOfRepair: "Electricity",
            thumb: "/content/img/7Electricity.jpg"            
        },
        {
            typeOfRepair: "Installation of ceramics",
            thumb: "/content/img/8Ceramics.jpg"            
        },
        {
            typeOfRepair: "Door installation",
            thumb: "/content/img/9Doors.jpg"            
        },
        {
            typeOfRepair: "Kitchen",
            thumb: "/content/img/10kitchen.jpg"            
        },
        {
            typeOfRepair: "Bathroom",
            thumb: "/content/img/11bathroom.jpg"            
        },
        {
            typeOfRepair: "Installation",
            thumb: "/content/img/12Installation.jpg"            
        }
        
    ];   
     
}]);


myRepairApp.controller('GalleryController', ['$scope', function($scope){
   
  $scope.enlargPhoto = function(gallery){
        $(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку высплывающего окна
			}, 800);
		});
	});
    }
    
    
    $scope.galleries = [
        {
            name: "New kitchen",
            thumb: "/content/img/sl1.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "New kitchen",
            thumb: "/content/img/sl2.jpg",
            additionalPeroid: "9 mins"   
        },
        {
            name: "New kitchen",
            thumb: "/content/img/sl3.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "New kitchen for your taste",
            thumb: "/content/img/sl4.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Pottery in the bathroom",
            thumb: "/content/img/sl5.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Pottery in the bathroom",
            thumb: "/content/img/sl6.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Pottery for your taste",
            thumb: "/content/img/sl7.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Whitewashing and painting ceilings and walls",
            thumb: "/content/img/sl8.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Doors for your taste",
            thumb: "/content/img/sl9.jpg",
            additionalPeroid: "9 mins"            
        }
                
    ];   
     
}]);


myRepairApp.controller('AboutController', ['$scope', function($scope){
    
     $scope.abouts = [
        {
            text: "My name is Jack and I've been doing repairs for 15 years. The most important thing for me is the quality of the services provided and satisfied customers."
        },
        {
            text: "I do both cosmetic and capital repairs, minor repairs, as well as remodeling.Cosmetic repair - works on the surface, aimed at improving the appearance of the room. The overhaul is aimed at a comprehensive improvement of the condition of the premises, implying the replacement of communications, the complete dismantling of old finishes and communications with the replacement of them with new ones. A more complex version of it is the reconstruction, which also includes the work on moving partitions."
        },
        {
            text: "Why choose me?"
        }
    ];
    
    
    $scope.advantages = [
        {
            typeOfAdvantage: "Reliability and adherence to timetables"
        },
        {
            typeOfAdvantage: "Possibility of renovation package with interior designer"
        },
        {
            typeOfAdvantage: "Recommendations"
        },
        {
            typeOfAdvantage: "15 years of experience"
        },
        {
            typeOfAdvantage: "Cleaning at the completion of the renovation"
        },
        {
            typeOfAdvantage: "1 year warranty for the work"
        },
        {
            typeOfAdvantage: "Option for credit payments"
        }
    ];
    
}]);


myRepairApp.controller('RecomendController', ['$scope', function($scope){
    
    $scope.recomends = [
        {
            titleOfRecomend: "By: Orit Kahlon",
            textOfRecomend: "Thank you very much for the excellent service I received, the result is really beautiful, everyone gives compliments and feeling wonderful"            
        },
        {
            titleOfRecomend: "By: Oksana Gorohovski",
            textOfRecomend: "I turned to Jack from everything to replace all the plumbing in my house I got the lowest price I met the schedule and I also received a bonus to renovate a children's room as a gift"         
        },
        {
            titleOfRecomend: "By: Irina Brinsky",
            textOfRecomend: " A trustworthy and diligent guy made me a perfect job just always available for claims and demands know to work thoroughly and cleanly really satisfied thanks Jack"             
        },
        {
            titleOfRecomend: "By: Miri from Ashkelon",
            textOfRecomend: "Renovation for every pocket"              
        },
        {
            titleOfRecomend: "By: Linoy",
            textOfRecomend: "Thank you very much. The result is really beautiful"           
        },
        {
            titleOfRecomend: " From: Dina",
            textOfRecomend: "Thanks for all renovations. Four months ago Jack from every renovation made us a new bathroom !! To this day I get compliments and the result is perfect. In addition to my sister renovated his bedroom and living room almost half a house he has amazingly amazing results and the return to times that is the most important !!"             
        },
        {
            titleOfRecomend: "By: Kate from Netivot",
            textOfRecomend: "Thanks for the work you've done. Everything is done well and on time!"             
        },
        {
            titleOfRecomend: " By: Sharon ",
            textOfRecomend: "I received a very low bid and work done quickly and with unrivaled quality. Thousands thanks to the renovation"             
        },
        {
            titleOfRecomend: "By: Nick from Beer Sheva",
            textOfRecomend: "In the pre-holiday period (Pesach) I called for renovations for everyone and explained that I wanted to renovate the house and my budget was low. Believe it or not you can renovate a house for NIS 10,000 and get an amazing result soon"            
        }
        
    ];   
     
}]);



myRepairApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    };
}]);
