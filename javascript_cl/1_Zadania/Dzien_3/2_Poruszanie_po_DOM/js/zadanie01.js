document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll("div");

  divs.forEach(function(element, index) {
    element.addEventListener("mousemove", function(event) {
      console.log("div " + index);
      var children = this.querySelector("ul").children;
      for (i = 0; i < children.length; i++) {
        if (i == 0) {
          children[i].style.backgroundColor = "red";
          console.log("div1 color");
        } else if (i == children.length - 1) {
          children[i].style.backgroundColor = "blue";
          console.log( "div2 color");

        } else {
          children[i].style.backgroundColor = "green";
          console.log("div3 color");

        }

        this.classList.add("hover");
      }



    })
  })
})
