document.addEventListener("DOMContentLoaded", function() {
  // &#10004
  var cardNum = document.querySelector("#card");
  var validation = document.querySelector("#type");
  console.log(validation);

  cardNum.addEventListener("keypress", function(event) {
    if (this.value.length < 1) {
      switch (event.keyCode) {
        case 52:
          validation.innerHTML = "VISA";
          break;
        case 53:
          validation.innerHTML = "MASTERCARD";
          break;
        default:
          validation.innerHTML = "?"
          break;
      }
    } else {
      if (this.value.substring(0, 2) == "34" || this.value.substring(0, 2) == "37") {
        validation.innerHTML = "AMERICANEXPRESS";
      }
      switch (validation.innerHTML) {
        case "VISA":
          if (this.value.length <= 15 && this.value.length >= 12) {
            validation.innerHTML = validation.innerHTML + " &#10004";
          }
          break;
        case "MASTERCARD":
          if (this.value.length >= 15 && this.value.length < 17) {
            validation.innerHTML = validation.innerHTML + " &#10004";
          }

          break;
        case "AMERICANEXPRESS":
          if (this.value.length >= 14 && this.value.length < 16) {
            validation.innerHTML = validation.innerHTML + " &#10004";
          }
          break;
        case "?":
          break;
        default:
          if(validation.innerHTML != "?") {
            if(this.value.length > 15) {
              validation.innerHTML = validation.innerHTML.split(" ").shift();
            }
          }
          break;
      }
    }
  })
})
