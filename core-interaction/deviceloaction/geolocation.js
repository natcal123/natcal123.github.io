function onSuccess(position) {
  console.log(position)

//where user is
  var x1 = position.coords.longitutde
  var y1 = position.coords.latitude

//where we want user to be
  var x2 = -73
  var y2 = 40

  var a = x1 - x2;
  var b = y1 - y2;

  var c = Math.sqrt( a*a + b*b );

  var hello = document.getElementById("hello")
  hello.style.opacity = c
  console.log(c)

// 0.005 ------------------- 0    GPS Distance
//    0 -------------------- 1    Opacity

//OPACITY
xMax = 1;
xMin = 0;

yMax = 0;
yMin = .0005;

percent = (c - yMin) / (yMax - yMin);
var outputX = percent * (xMax - xMin) + xMin;


console.log(outputX)
hello.style.opacity = outputX
}

  // var img = new Image();
  //
  // img.src = "https://maps.googleapis.com/maps/api/staticmap?center="
  // + position.coords.latitude + ","
  // + position.coords.longitude +
  // "&zoom=6&size=300x300&sensor=false";
  //
  // document.body.appendChild(img);


function onFailure() {

}

function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
