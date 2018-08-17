$(function() {
  //zadanie 1
  console.log("jquery hula jak ta lala yolo buoy");
  //zadanie2
  $('li', $('.main'), $('section')).addClass("borderClass");
  $(".showMore").eq(0).css("color", "red");
  //zadanie 3
  $('li', $('.main'), $('section')).addClass("colorText backgroundElement");
  //zadanie 3.1
  document.addEventListener("click", function() {
    $('li', $('.main'), $('section')).fadeToggle(1000);
  })
  console.log($("section.main"));
  //zadanie4

  // $("a").each(function(index, element) {
  //   if ($(element).attr('href') != null) {}
  //   $(element).css("color", "red");
  // });

  //4.1
  // $("a",$(".menu")).each(function(index, element) {
  //   if ($(element).attr('href') != null) {}
  //   $(element).css("color", "red");
  // });

  //4.3
  // $('a', $('.menu')).addClass("redLinks");
  //zad 4.4
  var points = $('a', $('.menu'));
  points.eq(0).addClass("bigFont")

  //zadan 5
  $("h1").each(function(index, element) {
    if(!$(element).hasClass("creepyHeader")) {
      $(element).toggleClass("creepyHeader");
    } else {
      console.log(element + " posiada juz klase creepyHeader");
    }
  });
});
