document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function(e) {
    e.addEventListener('click', function(event) {
      randomColor(this.parentElement);
    })
  })
})


function randomColor(clicked) {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  clicked.style.backgroundColor = randomColor;
}
