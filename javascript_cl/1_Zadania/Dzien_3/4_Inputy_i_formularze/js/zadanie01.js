document.addEventListener("DOMContentLoaded", function() {
  // &#10004
  var cardNum = document.querySelector("#card");
  var validation = document.querySelector("#type");

  function validate_first(regex, string) {
    var reg = new RegExp(regex);
    return reg.test(string);
  }

  function validate_length(from, to, value) {
    console.log("length validation");
    var reg = new RegExp("^([0-9]{" + from + "," + to + "})$");
    return reg.test(value);
  }

  cardNum.addEventListener("input", function(event) {
    var americanexpress = "^([3]{1}[4,7]{1})";
    var masercard = "^([5]{1})";
    var visa = "^([4]{1})";

    if (validate_first(americanexpress, this.value)) {
      console.log("americanexpress validation");

      if (validate_length(15, 15, this.value)) {
        validation.innerHTML = "AMERICANEXPRESS &#10004";
      } else {
        validation.innerHTML = "AMERICANEXPRESS"
      }
      return;
    }
    if (validate_first(masercard, this.value)) {
      console.log("Mastercard validation");
      if (validate_length(16, 16, this.value)) {
        validation.innerHTML = "Mastercard &#10004";
      } else {
        validation.innerHTML = "Mastercard";
      }
      return;
    }

    if (validate_first(visa, this.value)) {
      console.log("visa validation");

      if (validate_length(13, 16, this.value)) {
        validation.innerHTML = "Visa &#10004";
      } else {
        validation.innerHTML = "Visa";
      }
      return;
    }

    validation.innerHTML = "Unknown";


  })
})
