document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("button");
  var parent = document.querySelector("#bubblingButtons");
  console.log(parent);
  parent.addEventListener('click', function(event) {
    event.target.dataset.counter = 1 + +event.target.dataset.counter;

  });
});
