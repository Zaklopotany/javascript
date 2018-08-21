$(function() {
  console.log("jquery running");
  var counter = $('a[counter=1]');

  $("textarea").on('input', function(event) {
    var length = this.value.length;
    if (length > 100) {
      event.preventDefault();
      this.value = this.value.substring(0, 100);
    }
    
    counter[0].innerHTML = this.value.length + "/100";

    if (length < 33) {
      $(counter).css("color", "green");
    } else if (length > 33 && length < 66) {
      $(counter).css("color", "yellow");
    } else if (length > 66) {
      $(counter).css("color", "red");

    }
  })
})
