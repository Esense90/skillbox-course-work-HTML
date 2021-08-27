ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
          center: [55.766152, 37.634703],
          zoom: 14
    });
        
    var myPlacemark = new ymaps.Placemark([55.757176, 37.602085], {}, {
          iconLayout:'default#image',
          iconImageHref: './img/marker.svg',    
          iconImageSize: [20, 20],
          
        });
          myMap.geoObjects.add(myPlacemark);
}

