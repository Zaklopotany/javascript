document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".button");

  button.addEventListener('click', function() {
    var list = document.querySelector("ul");
    Array.from(list.children).forEach(function(e) {
      e.parentElement.removeChild(e);
    })
  })
})
