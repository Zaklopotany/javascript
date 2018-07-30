document.addEventListener("DOMContentLoaded", function() {
  Array.from(document.querySelectorAll(".deleteBtn")).forEach(function(e,i) {
    e.addEventListener('click', function() {
      var toDelete = this.parentElement.parentElement;
      toDelete.parentElement.removeChild(toDelete);
    })
  })
})
