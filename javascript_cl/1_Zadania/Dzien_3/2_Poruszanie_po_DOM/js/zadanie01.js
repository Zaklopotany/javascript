document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll("div");

  divs.forEach(function(element, index) {
    element.addEventListener("mousemove", function(event) {

      var children = this.querySelector("ul").children;
      for (i = 0; i < children.length; i++) {
        if (i == 0) {
          children[i].style.backgroundColor = "red";
        } else if (i == children.length - 1) {
          children[i].style.backgroundColor = "blue";
        } else {
          children[i].style.backgroundColor = "green";
        }

        this.classList.add("hover");
      }



    })
  })
})
