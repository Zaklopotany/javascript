/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
  console.log("zadanie 1 ");
  var ul = Array.from(document.querySelector("ul").children);
  ul.forEach(function(e, i, a) {
    if (!e.hasAttribute("data-direction")) {
      e.setAttribute("data-direction", "up");
    }
    if (i % 2 == 1) {
      e.style.backgroundColor = "green";
    }
    if (i % 3 == 2) {
      e.style.textDecoration = "underline";
    }

  });

  ul[4].classList.add("big");






  console.log("zadanie 2");

  var form = document.querySelector("form").querySelector("select").children;
  Array.from(form).forEach(function(e, i, a) {
    e.innerHTML = e.getAttribute("value");
    e.dataset.year = 20 + +e.getAttribute("value");
  });

  console.log("zadanie 3");

  var divs = document.querySelector("div.exercise.ex3").querySelectorAll("div");
  console.log(divs);
  // divs[1].querySelector("div").style.width = "100px";
  // divs[1].querySelector("div")


  divs.forEach(function(e, i, a) {
    if (i == 0) {
      e.querySelector("a").innerHTML = "Chrome";
    } else if (i == 4) {
      e.querySelector("a").innerHTML = "firefox";
      e.querySelector("a").setAttribute("href", "https://www.firefox.pl");

    }
    if (e.className == "chrome") {
      console.log(e);
      e.style.width = "100px";
      e.style.backgroundImage = 'url("assets/img/chrome.png")';

    } else if (e.className == "firefox") {
      e.style.backgroundImage = 'url("assets/img/firefox.png")';

    } else if (e.className == "edge") {
      e.style.backgroundImage = 'url("assets/img/edge.png")';

    }
  });


  console.log("zadanie 4");

  var lista = document.querySelector("div.exercise.ex4").querySelectorAll("span");
  lista[0].innerHTML = "Michal Zuko";
  lista[1].innerHTML = "123";
  lista[2].innerHTML = "kupa";

  console.log("zadanie 5");

  var ul = document.querySelector("div.exercise.ex5").querySelector("ul");
  ul.classList.add("menu");
  ul.querySelectorAll("li").forEach(function(e) {
    e.classList.add("menuElement");
    e.classList.remove("error");
  });

  console.log("zadanie 6");

  var kolejna_lista = document.querySelector("div.exercise.ex6").querySelector("ul");
  kolejna_lista.querySelectorAll("li").forEach(function(e, index) {
    e.dataset.id = 1 + +index;
    e.setAttribute("data-id", 1 + +index);
  })




  /*
  Poniżej napisz kod rozwiązujący zadania
   */

});
