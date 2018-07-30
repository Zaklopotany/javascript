document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("remove");
  button.addEventListener("click", function() {
    this.parentElement.removeChild(this);
    console.log("usunieto element");
  })

})
