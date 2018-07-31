var myRepairAppHe = angular.module('myRepairAppHe', ['ngRoute', 'ngAnimate']);

myRepairAppHe.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider
      .when('/home', {
        templateUrl: 'views/homeHe.html',
        controller: 'RepairControllerHe'
    })
      .when('/project', {
        templateUrl: 'views/projectHe.html',
        controller: 'GalleryControllerHe'   
    })
      .when('/about', {
        templateUrl: 'views/aboutHe.html',
        controller: 'AboutControllerHe'
   })
      .when('/recomend', {
        templateUrl: 'views/recomendHe.html',
        controller: 'RecomendControllerHe'
   })
      .when('/contact', {
        templateUrl: 'views/contactHe.html',
        controller: 'ContactControllerHe'
    })
      .when('/contact-success', {
        templateUrl: 'views/contact-successHe.html',
        controller: 'ContactControllerHe'
    }).otherwise({
        redirectTo: '/home'
    });    
     
}]);
    

myRepairAppHe.controller('RepairControllerHe', ['$scope', function($scope){
    
    $scope.repairs = [
        {
            typeOfRepair: "גימור חיצוני וציור בבית",
            thumb: "/content/img/1Exterior.jpg"            
        },
        {
            typeOfRepair: "תיקון והתקנת הגג",
            thumb: "/content/img/2Roof.png"            
        },
        {
            typeOfRepair: "חימום קירות, איטום קירות וגגות",
            thumb: "/content/img/3WarmingWalls.jpg"            
        },
        {
            typeOfRepair: "עבודה עם גבס",
            thumb: "/content/img/4Plasterboard.jpg"            
        },
        {
            typeOfRepair: "תקרות טיח וקירות",
            thumb: "/content/img/5Ceiling.jpg"            
        },
        {
            typeOfRepair: "טפט הדבקה, כרכובים",           
            thumb: "/content/img/6Wallpaper.jpg"            
        },
        {
            typeOfRepair: "חשמל",
            thumb: "/content/img/7Electricity.jpg"            
        },
        {
            typeOfRepair: "התקנת קרמיקה",
            thumb: "/content/img/8Ceramics.jpg"            
        },
        {
            typeOfRepair: "התקנת דלת",
            thumb: "/content/img/9Doors.jpg"            
        },
        {
            typeOfRepair: "מטבח",
            thumb: "/content/img/10kitchen.jpg"            
        },
        {
            typeOfRepair: "חדר אמבטיה",
            thumb: "/content/img/11bathroom.jpg"            
        },
        {
            typeOfRepair: "אינסטלציה",
            thumb: "/content/img/12Installation.jpg"            
        }
        
    ];   
     
}]);


myRepairAppHe.controller('GalleryControllerHe', ['$scope', function($scope){
   
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
            name: "מטבח חדש",
            thumb: "/content/img/sl1.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "מטבח חדש",
            thumb: "/content/img/sl2.jpg",
            additionalPeroid: "9 mins"   
        },
        {
            name: "מטבח חדש",
            thumb: "/content/img/sl3.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "מטבח חדש לטעם שלך",
            thumb: "/content/img/sl4.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "קדרות בחדר האמבטיה",
            thumb: "/content/img/sl5.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "קדרות בחדר האמבטיה",
            thumb: "/content/img/sl6.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "קדרות לטעם שלך",
            thumb: "/content/img/sl7.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "צביעה וציפוי תקרות וקירות",
            thumb: "/content/img/sl8.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "דלתות לטעם שלך",
            thumb: "/content/img/sl9.jpg",
            additionalPeroid: "9 mins"            
        }
                
    ];   
     
}]);


myRepairAppHe.controller('AboutControllerHe', ['$scope', function($scope){
    
     $scope.abouts = [
        {
            text: "שמי ג'ק ואני עושה תיקונים כבר 15 שנה. הדבר החשוב ביותר עבורי הוא איכות השירותים הניתנים ללקוחות מרוצים."
        },
        {
            text: "אני עושה גם תיקונים קוסמטיים ההון, תיקונים קטנים, כמו גם שיפוץ. תיקון קוסמטי - עובד על פני השטח, שמטרתה לשפר את המראה של החדר. השיפוץ מכוון לשיפור מקיף של מצב המקום, מה שמרמז על החלפת תקשורת, פירוק שלם של גימורים ותקשורת ישנים עם החלפתם בחדשים. גרסה מורכבת יותר של שחזור זה, אשר כוללת גם את העבודה על העברת מחיצות."
        },
        {
            text: "למה לבחור בי?"
        }
    ];
    
    
    $scope.advantages = [
        {
            typeOfAdvantage: "אמינות ודבקות בלוחות זמנים"
        },
        {
            typeOfAdvantage: "אפשרות של שיפוץ החבילה עם מעצב פנים"
        },
        {
            typeOfAdvantage: "המלצות"
        },
        {
            typeOfAdvantage: "15 שנות ניסיון"
        },
        {
            typeOfAdvantage: "ניקוי עם סיום השיפוץ"
        },
        {
            typeOfAdvantage: "אחריות לשנה אחת על העבודה"
        },
        {
            typeOfAdvantage: "אפשרות לתשלומי אשראי"
        }
    ];
    
}]);


myRepairAppHe.controller('RecomendControllerHe', ['$scope', function($scope){
    
    $scope.recomends = [
        {
            titleOfRecomend: "מאת: אורית כחלון",
            textOfRecomend: "תודה רבה על השירות המצוין שקיבלתי, התוצאה היא באמת יפה, כולם נותנים מחמאות והרגשה נפלאה"            
        },
        {
            titleOfRecomend: "מאת: אוקסנה גורוחובסקי",
            textOfRecomend: "פניתי אל ג'ק להחליף את כל הצנרת בבית. קיבלתי את המחיר הנמוך ביותר וגם יש הנחה טובה לתיקון חדר הילדים."         
        },
        {
            titleOfRecomend: "מאת: אירינה ברינסקי",
            textOfRecomend: " בחור אמין וחרוץ עשה לי עבודה מושלמת רק תמיד זמין עבור תביעות ודרישות יודע לעבוד ביסודיות ונקי באמת מרוצה תודה ג 'ק"             
        },
        {
            titleOfRecomend: "מאת: מירי מאשקלון",
            textOfRecomend: "שיפוץ לכל כיס"              
        },
        {
            titleOfRecomend: "מאת: לינוי",
            textOfRecomend: "תודה רבה, התוצאה ממש יפה"           
        },
        {
            titleOfRecomend: "מאת: דינה",
            textOfRecomend: "תודה על כל עבודת התיקון. לפני ארבעה חודשים ג'ק של כל עדכון גרם לנו כמו חדר אמבטיה חדש! עד עכשיו, קיבלתי מחמאות, והתוצאה יפה. בנוסף לכך, אחותי שיפצה כמעט מחצית הבית, יש לו תוצאות מדהימות וחוזר פעמים החשובות לנו ביותר !!"             
        },
        {
            titleOfRecomend: "מאת: קייט מנתיבות",
            textOfRecomend: "תודה על העבודה שעשית, הכל עשה טוב ובזמן!"             
        },
        {
            titleOfRecomend: "מאת: שרון",
            textOfRecomend: "קיבלתי הצעה נמוכה מאוד ועבודה נעשתה במהירות ובאיכות ללא תחרות, אלפים תודות לשיפוץ"             
        },
        {
            titleOfRecomend: "מאת: ניק מבאר שבע",
            textOfRecomend: "בפסח החלטתי לשפץ את הבית, והתקציב שלי היה נמוך. תאמינו או לא, אתם יכולים לתקן את הבית ב -10,000 שקל ולקבל תוצאה מדהימה בקרוב"            
        }
        
    ];   
     
}]);



myRepairAppHe.controller('ContactControllerHe', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-successHe');
    };
}]);
