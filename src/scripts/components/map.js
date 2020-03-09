function initMap() {
    let map = new google.maps.Map(document.querySelector('.o-location__map'), {
        center: {lat: 3.160186, lng: 101.7281344},
        zoom: 16,
        disableDefaultUI: true,
        styles: [
            {
              "featureType": "poi",
              "stylers": [
                { "visibility": "off" }
              ]
            }
          ]
      });
}


export default initMap;