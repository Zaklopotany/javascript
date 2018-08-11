document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("button").addEventListener('click', function(e) {
    var check = Array.from(document.querySelectorAll("input")).every(function(e, i, a) {
      switch (i) {
        case 0:
          return (new RegExp("[@]")).test(e.value);
          break;
        case 1:
          return e.value.length > 5;
          break;
        case 2:
          return e.value.length
          break;
        case 3:
          return e.value == a[i + 1].value;
          break;
        case 5:
          return e.checked;
          break;
        default:
          return true;
      }
    })
    if (!check) {
      e.preventDefault();
    }
  })
  //
  // document.querySelector("button").addEventListener('click', function(e) {
  //   var email = (new RegExp("[@]")).test(document.querySelector("#email").value);
  //   var nameLength = document.querySelector("#name").value.length > 5;
  //   var surnameLength = document.querySelector("#surname").value.length > 5;
  //   var pass1 = document.querySelector("#pass1").value;
  //   var pass2 = document.querySelector("#pass2").value;
  //   var password = pass1 === pass2;
  //   var agree = document.querySelector("#agree").checked;
  //
  //   if (!(agree && email && nameLength && surnameLength && password)) {
  //     e.preventDefault();
  //
  //   }
  // })
})
