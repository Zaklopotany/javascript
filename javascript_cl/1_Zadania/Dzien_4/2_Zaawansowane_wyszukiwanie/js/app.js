$(function() {
  console.log("jquery test 1 2 3 ....");
  var span = $("span[data-task=_task1]");
  //zadanie 1.1
  console.log(span[0].innerHTML);
  //zadanie 1.2
  var nextElement = $(span).siblings("p")[0];
  console.log(nextElement.innerHTML);
  //zadanie 1.3
  var parent = $(nextElement).closest("section");
  console.log(parent);
  //zadanie 1.4.
  var afterParent = $(parent).next();
  console.log(afterParent);
  //zadanie 1.5
  var elements = $(".container").each(function(index, element) {
    $(element).css("background-color", "green");
    $(element).addClass("answerTask1");
    $(element).delay(4000).slideUp(1000);
  });
  //zadanie 1.6

  //zadanie 2

  var span2 = $("span[data-task=_task2]");
  console.log(span2);
  //zadanie 2.2
  var section2 = span.closest("section.shopping");
  console.log(section2);
  //zadani 2.3
  var children2 = $(section2).children("div")[1];
  console.log(children2);
  //zadanie 2.4
  var potomek = $(children2).find('button');
  console.log(potomek);
  //zadanie 2.5
  var cart = potomek.closest(".cart-item").addClass("cart-updated");
  console.log(cart);
  //Jquery cool af yolo

})
