$(function() {

  //zadanie 1
  console.log("jquery Test");
  var buttons = $("button", $(".hero-buttons"));
  console.log(buttons);
  buttons.each(function(index, element) {
    $(element).attr("value", index);
  });

  buttons.eq(0).on('click', function(element) {
    $(this).on('click', function(event) {
      console.log("zostalem klikniety, moj index " + $(this).attr("value"));
    });

  });

  buttons.eq(1).one("click", function() {
    console.log("kliknieto mnie ale nie dam sie kliknac wiecej razy");
  })

  buttons.eq(2).one('click', function() {
    buttons.off();
  });

  //zadanie 2

})
