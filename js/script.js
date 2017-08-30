
function intMap()
{
  myCenter=new google.maps.LatLng(52.2251042, 21.0139127);
  var mapOptions= {
    center:myCenter,
    zoom:15, scrollwheel: false, draggable: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}