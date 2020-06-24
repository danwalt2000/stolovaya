/*Яндекс карта*/
// ymaps.ready(init);
// var myMap,mapPin1,mapPin2;
//
// function init(){
//     myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 10
//     });
//     myMap2 = new ymaps.Map("map2", {
//         center: [55.76, 37.64],
//         zoom: 10
//     });
//     mapPin1 = new ymaps.Placemark([55.72037084, 37.77488142], {
//         hintContent: 'Рязанский проспект, 24к2',
//         balloonContent: 'Главный офис'
//     },{
//         iconLayout: 'default#image',
//             iconImageHref: '/bitrix/templates/STOLOVAYA_2017/images/map-pin-red.png',
//             iconImageSize: [29, 29]
//     }
//     );
//     myMap.geoObjects.add(mapPin1);
//     myMap2.geoObjects.add(mapPin1);
//
//     mapPin2 = new ymaps.Placemark([55.75399400, 37.62209300], {
//             hintContent: 'ул. Донецкая 30, склад №47',
//             balloonContent: 'Склад'
//         },{
//             iconLayout: 'default#image',
//             iconImageHref: '/bitrix/templates/STOLOVAYA_2017/images/map-pin-orange.png',
//             iconImageSize: [29, 29]
//         }
//     );
//     myMap.geoObjects.add(mapPin2);
//     myMap2.geoObjects.add(mapPin2);
//
// }
/*Код Кати*/
/*
var map,
    placemark;
ymaps.ready(function () {
    map = [];
    map = new ymaps.Map("map", {
        center: [52.426955, 30.914953],
        zoom: 17,
        controls: ['zoomControl']
    });
    placemark = new ymaps.Placemark([52.426955, 30.914953], {
            balloonContent: 'ул. Барыкина,  д. 309 к. 2'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './images/map-pin-red.png',
            iconImageSize: [27, 27]
        }
    );
    map.geoObjects.add(placemark);
    // map.balloon.add(placemark);
});
*/