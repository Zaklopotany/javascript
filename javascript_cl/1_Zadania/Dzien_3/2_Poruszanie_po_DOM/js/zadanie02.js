document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll("a.button");
  console.log(buttons);

  buttons.forEach(function(e) {
    e.addEventListener('click', function(event) {
      if (this.nextElementSibling.classList.length > 0) {
        this.nextElementSibling.classList.remove("box");
      } else {
        this.nextElementSibling.classList.add("box");

      }

    })
  })

})
