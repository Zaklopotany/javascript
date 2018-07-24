document.addEventListener("DOMContentLoaded", function() {
  var buttons = Array.from(document.getElementsByTagName("button"));
  var span = document.querySelector("span.counter");

  buttons.forEach(function(e) {
    e.addEventListener('click', function() {
      span.innerHTML = 1 + +span.innerHTML;
    })
  })
})
