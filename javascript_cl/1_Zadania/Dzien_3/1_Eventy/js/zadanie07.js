document.addEventListener("DOMContentLoaded", function() {
  var div = document.querySelector("div");
  div.addEventListener('mousemove', function(event) {
    document.getElementById("globalX").innerHTML = event.screenX;
    document.getElementById("globalY").innerHTML = event.screenY;
    document.getElementById("localX").innerHTML = event.clientX;
    document.getElementById("localY").innerHTML = event.clientY;
  })
}) 
