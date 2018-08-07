document.addEventListener("DOMContentLoaded", function() {

  var checkboxes = (Array.from(document.querySelectorAll("input"))).filter(function(e) {
    return e.dataset.price > 0;
  });


checkboxes.forEach(function(e) {
  e.addEventListener("click", function() {
    var price = this.dataset.price;
    var totalSum = document.querySelector("#price").innerHTML;


    var totalReg = new RegExp("^[0-9]]+[.][0-9]+|^[0-9]+");
    var getTotal = totalReg.exec(totalSum)
    console.log(totalReg.exec(price));
    console.log(totalSum);
    console.log(getTotal);
    console.log(this.dataset.price);
    if(e.checked) {
      // console.log(price);

    } else {

    }
  })
})



})
