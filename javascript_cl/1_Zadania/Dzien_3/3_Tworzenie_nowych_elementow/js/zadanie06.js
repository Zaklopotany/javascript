document.addEventListener("DOMContentLoaded", function() {
  var list1 = document.querySelectorAll("ul");

  list1.forEach(function(e) {
    Array.from(e.children).forEach(function(ele) {
      ele.querySelector(".moveBtn").addEventListener('click', function() {
        if (this.parentElement.parentElement.id == "list1") {
          list1[1].appendChild(this.parentElement);
        } else {
          list1[0].appendChild(this.parentElement);
        }
      })
    })
  })



})
