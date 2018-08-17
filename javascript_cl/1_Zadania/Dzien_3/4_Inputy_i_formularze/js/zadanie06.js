document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector("button");
  //validation condition 
  button.addEventListener('click', function(e) {

    var inputs = Array.from(document.querySelectorAll("input"));
    var teams = inputs[0].value != inputs[2].value;
    var scores = (parseInt(inputs[1].value) >= 0 && parseInt(inputs[3].value) >= 0);

    if (teams && scores) {
      e.preventDefault();
      var tr = document.createElement("tr");
      for(i =0; i < 3; i++) {
        var td = document.createElement("td");
        if(i == 0) {
          td.innerHTML = inputs[0].value;
          tr.appendChild(td);
        } else if(i == 1) {
          td.innerHTML = inputs[2].value;
          tr.appendChild(td);
        } else if (i == 2) {
          td.innerHTML = inputs[1].value + " - " + inputs[3].value;
          tr.appendChild(td);
        }
      }

      document.querySelector("table").appendChild(tr);
    }
  })
})
