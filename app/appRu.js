var myRepairAppRu = angular.module('myRepairAppRu', ['ngRoute', 'ngAnimate']);

myRepairAppRu.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider
      .when('/home', {
        templateUrl: 'views/homeRu.html',
        controller: 'RepairControllerRu'
    })
      .when('/project', {
        templateUrl: 'views/projectRu.html',
        controller: 'GalleryControllerRu'   
    })
      .when('/about', {
        templateUrl: 'views/aboutRu.html',
        controller: 'AboutControllerRu'
   })
      .when('/recomend', {
        templateUrl: 'views/recomendRu.html',
        controller: 'RecomendControllerRu'
   })
      .when('/contact', {
        templateUrl: 'views/contactRu.html',
        controller: 'ContactControllerRu'
    })
      .when('/contact-success', {
        templateUrl: 'views/contact-successRu.html',
        controller: 'ContactControllerRu'
    }).otherwise({
        redirectTo: '/home'
    });    
     
}]);
    

myRepairAppRu.controller('RepairControllerRu', ['$scope', function($scope){
    
    $scope.repairs = [
        {
            typeOfRepair: "Внешняя отделка и покраска дома",
            thumb: "/content/img/1Exterior.jpg"            
        },
        {
            typeOfRepair: "Ремонт и монтаж крыши",
            thumb: "/content/img/2Roof.png"            
        },
        {
            typeOfRepair: "Утепление стен, гидроизоляция стен и крыш",
            thumb: "/content/img/3WarmingWalls.jpg"            
        },
        {
            typeOfRepair: "Работа с гипсокартоном",
            thumb: "/content/img/4Plasterboard.jpg"            
        },
        {
            typeOfRepair: "Побелка и покраска потолков и стен",
            thumb: "/content/img/5Ceiling.jpg"            
        },
        {
            typeOfRepair: "Поклейка обоев, карнизов",           
            thumb: "/content/img/6Wallpaper.jpg"            
        },
        {
            typeOfRepair: "Электрика",
            thumb: "/content/img/7Electricity.jpg"            
        },
        {
            typeOfRepair: "Укладка керамики",
            thumb: "/content/img/8Ceramics.jpg"            
        },
        {
            typeOfRepair: "Установка дверей",
            thumb: "/content/img/9Doors.jpg"            
        },
        {
            typeOfRepair: "Установка кухни",
            thumb: "/content/img/10kitchen.jpg"            
        },
        {
            typeOfRepair: "Ремонтные работы в ванной комнате",
            thumb: "/content/img/11bathroom.jpg"            
        },
        {
            typeOfRepair: "Инсталяция",
            thumb: "/content/img/12Installation.jpg"            
        }
        
    ];   
     
}]);


myRepairAppRu.controller('GalleryControllerRu', ['$scope', function($scope){
   
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
            name: "Новая кухня",
            thumb: "/content/img/sl1.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Новая кухня",
            thumb: "/content/img/sl2.jpg",
            additionalPeroid: "9 mins"   
        },
        {
            name: "Новая кухня",
            thumb: "/content/img/sl3.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Новая кухня на Ваш вкус",
            thumb: "/content/img/sl4.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Керамика в ванной комнате",
            thumb: "/content/img/sl5.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Керамика в ванной комнате",
            thumb: "/content/img/sl6.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Керамика на Ваш вкус",
            thumb: "/content/img/sl7.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Покраска и побелка потолков и стен",
            thumb: "/content/img/sl8.jpg",
            additionalPeroid: "9 mins"            
        },
        {
            name: "Двери на Ваш вкус",
            thumb: "/content/img/sl9.jpg",
            additionalPeroid: "9 mins"            
        }
                
    ];   
     
}]);


myRepairAppRu.controller('AboutControllerRu', ['$scope', function($scope){
    
     $scope.abouts = [
        {
            text: "Меня зовут Джек, и я занимаюсь ремонтом в течение 15 лет. Самое главное для меня - качество предоставляемых услуг и довольные клиенты."
        },
        {
            text: "Я занимаюсь как косметическим, так и капитальным ремонтом, мелким ремонтом, а также ремоделированием. Косметический ремонт направлен на улучшение внешнего вида комнаты. Капитальный ремонт направлен на всестороннее улучшение состояния помещений, что подразумевает замену коммуникаций, полный демонтаж старых отделок и коммуникаций с заменой их новыми. Более сложной версией является реконструкция, которая также включает в себя работу по перемещению разделов."
        },
        {
            text: "Почему выбирать меня?"
        }
    ];
    
    
    $scope.advantages = [
        {
            typeOfAdvantage: "Надежность и соблюдение сроков"
        },
        {
            typeOfAdvantage: "Возможность обсуждения преобразования помецения с дизайнером интерьеров"
        },
        {
            typeOfAdvantage: "Рекомендации"
        },
        {
            typeOfAdvantage: "15 лет опыта"
        },
        {
            typeOfAdvantage: "Очистка помещения при завершении ремонта"
        },
        {
            typeOfAdvantage: "1  год гарантии на работу"
        },
        {
            typeOfAdvantage: "Вариант для кредитных платежей"
        }
    ];
    
}]);


myRepairAppRu.controller('RecomendControllerRu', ['$scope', function($scope){
    
    $scope.recomends = [
        {
            titleOfRecomend: "Автор: Орит Кахлон",
            textOfRecomend: "Большое спасибо за отличный сервис, который я получила. Результат действительно прекрасный, все гости выражают свои комплементы в адрес работ."            
        },
        {
            titleOfRecomend: "Автор: Оксана Гороховски",
            textOfRecomend: "Я обратилась к Джеку, чтобы заменить всю сантехнику в моем доме. Я получила самую низкую цену и также получила хорошую скидку за ремонт детской комнаты."         
        },
        {
            titleOfRecomend: "Автор: Ирина Бринский",
            textOfRecomend: "Надежный и прилежный парень сделал мне идеальный ремонт, всегда выслушает мои претензии и требования, которые умеет работать основательно и чисто. Я очень довольна результатом, спасибо Джек."             
        },
        {
            titleOfRecomend: "Автор: Мири из Ашкелона",
            textOfRecomend: "Обновление для каждого кармана"              
        },
        {
            titleOfRecomend: "Автор: Линой",
            textOfRecomend: "Большое вам спасибо. Результат очень красивый"           
        },
        {
            titleOfRecomend: "Автор: Дина",
            textOfRecomend: "Спасибо за все ремонтные работы. Четыре месяца назад Джек из каждого обновления сделал нам как будто новую ванную комнату! До сих пор я получаю комплименты, и результат прекрасен. В дополнение к этому, моей сестре отремонтировал почти половину дома, он имеет удивительные результаты и возвращает к временам, которые являются самыми важными для нас!!"             
        },
        {
            titleOfRecomend: "Автор: Кэйт из Нетивота",
            textOfRecomend: "Спасибо за проделанную работу. Все выполнено хорошо и в запланированные сроки!"             
        },
        {
            titleOfRecomend: "Автор: Шарон",
            textOfRecomend: "Я получил очень низкую цену. Работа была проделана быстро и с непревзойденным качеством. Большое спасибо"             
        },
        {
            titleOfRecomend: "Автор: Ник из Беэр-Шева",
            textOfRecomend: "На Песах я решил отремонтировать дом, и мой бюджет был низким. Верьте или нет, вы можете отремонтировать дом за 10 000 шекелей и получить потрясающий результат в скором времени"            
        }
        
    ];   
     
}]);



myRepairAppRu.controller('ContactControllerRu', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-successRu');
    };
}]);
