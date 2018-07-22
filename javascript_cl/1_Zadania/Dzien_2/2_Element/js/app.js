/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
  var homeElement = document.getElementById("home");
  var childElements = document.querySelector(".oferts").children;
  var banner = document.querySelector(".ban");
  var blocks = document.querySelectorAll(".block");
  var links = document.querySelector(".links").children;

  console.log("zadanie 1");
  var homeElement_class = homeElement.className;
  homeElement.className = homeElement.id;
  homeElement.id = homeElement_class;

  console.log("zadanie 3");

  console.log(blocks);
  blocks.forEach(function(element, index, array) {
    console.log("innerHTML");
    console.log(element.innerHTML);
    console.log("outerHTML");
    console.log(element.outerHTML);
    element.innerHTML = "Nowa wartość diva o klasie blocks";
  });
  //innerHTML zawiera to co znajduje sie w tagu głównym
  //outerHTML zawiera wszystko wraz z tagiem w którym dane elementy sie zzawieraja


  console.log("zadanie 2");
  var empty = [];
  empty.push.apply(empty, homeElement);
  empty.push.apply(empty, childElements);
  empty.push.apply(empty, banner);
  empty.push.apply(empty, blocks);
  empty.push.apply(empty, links);
  empty.forEach(function(element) {
    console.log(typeof element);
  });

console.log("zadanie 4");
console.log(homeElement.id);

console.log("zadanie 5");
//obiekt nie tablica
console.log(childElements);

console.log("zadanie 6");
Array.from(links).forEach(function(element) {
  console.log(element.dataset);
});

console.log(banner);
console.log(banner.classList);
console.log(banner.className);

console.log(typeof banner.classList);
console.log(typeof banner.className);




  /*
  Poniżej napisz kod rozwiązujący zadania
   */

});
