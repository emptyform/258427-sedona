var map = document.querySelector('.map');


function initMap() {
  var positionSedona = new google.maps.LatLng(34.86973, -111.76098);
  var markerPosition = new google.maps.LatLng(34.774435, -111.775902);

  var mapOptions = {
    center: positionSedona,
    scrollwheel: false,
    zoom: 7
  }

  var googleMap = new google.maps.Map(map, mapOptions);
  var markerImage = '../img/icon-map-marker.svg';


  var mapMarker = new google.maps.Marker({
    icon: markerImage,
    map: googleMap,
    position: markerPosition
  });
}
