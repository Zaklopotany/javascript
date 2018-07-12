//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function() {
  var article_first = document.querySelector("article.first");
  var h1 = article_first.querySelectorAll("h1");
  console.log(h1.length);
  var classes = article_first.getElementsByClassName("offers");
  console.log("Liczba elementow classes " + classes.length);
  for (i = 0; i < classes.length; i++) {
    console.log(classes[i]);
  }
  var divs = article_first.getElementsByTagName("div");
  console.log("liczba elementow div " + divs.length);
  for (i = 0; i < divs.length; i++) {
    console.log(divs[i]);
  }

  console.log("zadanie drugie");

  var id = document.getElementById("exercise2");
  console.log(id);

  console.log("zadanie trzecie");

  var id_1 = document.getElementById("home");
  var id_2 = document.querySelector("#home");
  console.log(id_1 === id_2);
  console.log(id_1 + " id1 i id2 " + id_2);

  var id_not = document.querySelector("li:not([data-direction])");
  console.log(id_not);

  var class_block = document.querySelector(".block");
  console.log(class_block);

  console.log("zadanie czwarte");

  var zad4_1 = (document.querySelector("nav")).querySelectorAll("li");
  console.log(zad4_1[0]);
  console.log(zad4_1.length);

  var divs1 = document.querySelectorAll("div");
  console.log("divs length " + divs1.length);
  var empty = [];

  for (i = 0; i < divs.length; i++) {
    var ps = divs1[i].querySelectorAll("p");
    console.log("psss " + ps.length);
    if (ps.length > 0) {
      empty.push.apply(empty, ps);
    }
  }
  console.log("empty length " + empty.length);
  console.log(empty);

  var article1 = document.getElementsByTagName("article");
  article1 = article1[0].getElementsByTagName("div");
  console.log(article1);



  /*

  Poniżej napisz kod rozwiązujący zadania
   */
});
