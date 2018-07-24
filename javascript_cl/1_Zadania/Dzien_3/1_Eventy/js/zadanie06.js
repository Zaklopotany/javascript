function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomColor2() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("DOMContentLoaded", function() {
  var divs = document.querySelectorAll("div");
  divs.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
      this.style.backgroundColor = getRandomColor2();
    })
  })
})
