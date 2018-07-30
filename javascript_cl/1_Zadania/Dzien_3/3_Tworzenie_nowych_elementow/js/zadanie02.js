document.addEventListener("DOMContentLoaded", function() {
  var list = document.querySelector("ul");
  document.querySelector(".button").addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerHTML = "Element numer " + (list.children.length + 1)
    + " w chwili tworzenie na liscie bylo " + list.children.length;
    list.appendChild(li);
  })

})
