document.addEventListener("DOMContentLoaded", function() {

  var checkboxes = (Array.from(document.querySelectorAll("input")));
  var inputs = checkboxes.filter(function(e) {
    return e.dataset.price > 0;
  });

  //custom action to manage input event
  function myAction() {
    var price = this.dataset.price;
    var totalSumPLN = document.querySelector("#price");
    var totalReg = new RegExp("^[0-9]+[.][0-9]+|^[0-9]+");
    var getTotal = totalReg.exec(totalSumPLN.innerHTML);

    if (this.checked) {
      totalSumPLN.innerHTML = parseFloat((+getTotal + +price)).toFixed(2) + "zł";
    } else {
      totalSumPLN.innerHTML = parseFloat((+getTotal - price)).toFixed(2) + "zł";

    }
  };

  //selectALL EVENT
  checkboxes[0].addEventListener('change', function() {
    if (this.checked) {
      inputs.forEach(function(e) {
        if (!e.checked) {
          e.checked = true;
          e.dispatchEvent(new Event('change'));
        }
      })
      this.checked = false;
    }
  })

  //DESELECTALL EVENT
  checkboxes[checkboxes.length - 1].addEventListener('change', function() {
    if (this.checked) {
      inputs.forEach(function(e) {
        if (e.checked) {
          e.checked = false;
          e.dispatchEvent(new Event('change'));
        }
      })
      this.checked = false;
    }
  })

  //SINGLE CHECKBOX EVENT
  checkboxes.filter(function(e) {
    return e.dataset.price > 0;
  }).forEach(function(e) {
    e.addEventListener('change', myAction);
  })
  //submit event
  document.querySelector("button").addEventListener('click', function() {
    alert("totalPrice is " + document.querySelector("#price").innerHTML);
  })




})
