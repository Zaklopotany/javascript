document.addEventListener("DOMContentLoaded", function() {
  var select = document.querySelector('select');

   var button = document.querySelector('button');

  button.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelectorAll('img').forEach(function(e, i) {
      switch (select.selectedIndex) {
        case 0:
          hideImages(e, "windows")
          break;
        case 1:
          hideImages(e, "apple");
          break;
        case 2:
          hideImages(e, "ubuntu");
          break;

      }
    })
  })



  function hideImages(image, name) {
    if (image.src.includes(name)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }


})
