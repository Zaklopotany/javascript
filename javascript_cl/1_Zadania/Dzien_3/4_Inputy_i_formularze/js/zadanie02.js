// document.addEventListener("DOMContentLoaded", function() {
//   var invoice = document.querySelector("#invoice");
//   var invoiceData = document.querySelector("#invoiceData");
//   if(!invoice.checked) {
//     invoiceData.style.visibility = "hidden";
//   }
//
//   invoice.addEventListener("input", function() {
//     if (this.checked) {
//       invoiceData.style.visibility= "visible"
//     } else {
//       invoiceData.style.visibility= "hidden"
//     }
//   })
// })



document.addEventListener("DOMContentLoaded", function() {
  var invoice = document.querySelector("#invoice");
  var invoiceData = document.querySelector("#invoiceData");
  if(!invoice.checked) {
    invoiceData.style.display = "none";
  }

  invoice.addEventListener("input", function() {
    if (this.checked) {
      invoiceData.style.display = "block";
        } else {
      invoiceData.style.display = "none";

    }
  })
})
