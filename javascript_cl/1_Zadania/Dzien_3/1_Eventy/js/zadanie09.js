document.addEventListener("DOMContentLoaded", function() {
  var windowWidth = document.getElementById("windowWidth");
  var windowHeight = document.getElementById("windowHeight");
  windowWidth.innerHTML = window.innerWidth;
  windowHeight.innerHTML = window.innerHeight;

  window.addEventListener('resize', function() {
    windowWidth.innerHTML = window.innerWidth;
    windowHeight.innerHTML = window.innerHeight;

  })
})
