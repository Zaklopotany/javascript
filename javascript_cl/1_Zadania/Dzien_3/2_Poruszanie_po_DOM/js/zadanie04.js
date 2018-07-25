document.addEventListener("DOMContentLoaded", function() {

  var first = document.querySelector(".first").firstElementChild.children[2];
  console.log(first.dataset.answer);

  var second = document.getElementById("second").parentElement.children[3].dataset.answer;
  console.log(second);

  var third = document.querySelector('[data-ex="third"]').
  parentElement.parentElement.lastElementChild
    .firstElementChild.children;
  console.log(third[Math.floor(third.length / 2)].dataset.answer);

  console.log(document.querySelector("div.fourth")
    .parentElement.querySelector("article").querySelectorAll("p")[1].dataset.answer);

});
