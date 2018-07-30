document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("addBtn");
  button.addEventListener("click", function() {
    var values = Array.from(document.querySelectorAll("input"));

    var table = document.getElementById("orders").firstElementChild;
    var row = table.firstElementChild.cloneNode(true);

    Array.from(row.children).forEach(function(e, i) {
      e.innerHTML = values[i].value;
    })

    if (values.every(function(e) {
        return e.value.length >= 1;
      })) {
      table.appendChild(row);
    }


  })
})
