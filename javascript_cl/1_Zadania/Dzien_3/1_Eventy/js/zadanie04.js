document.addEventListener("DOMContentLoaded", function() {
  var spans = document.querySelectorAll("span.counter");
  var buttons = document.querySelectorAll("button");

  buttons.forEach(function(e) {
    e.addEventListener('click', function(event) {
      if (this.id == "button1") {
        spans[0].innerHTML = 1 + +spans[0].innerHTML;
      } else if (this.id == "button2") {
        spans[1].innerHTML = 1 + +spans[1].innerHTML;
      } else if (this.id == "button3") {
        spans[2].innerHTML = 1 + +spans[2].innerHTML;
      }
    })
  })


})
