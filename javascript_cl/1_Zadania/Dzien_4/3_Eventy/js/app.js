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

  //zadanie 3

  var dt = $("dt", $("section.superhero-description")); //.find("dt");
  var dds = $("dd", $("section.superhero-description"));
  dds.hide();
  dt.on('click', function() {
    var dd = $(this).next();
    dd.toggle();
  })

  //zadanie 4
  var form = $("form.login");
  var button = form.find(".show-hide-btn");
  console.log(button);
  button.on('click', function(e) {
    e.preventDefault();
    form.find("input").each(function(e, i) {
      if ($(this).attr("type") == "password") {
        $(this).attr("type", "text");
      } else {
        $(this).attr("type", "password");
      }
    })
  });

  var menuChildren = $(".menu").children();
  menuChildren.on('mouseover', function() {
    console.log("Hura element " + this.innerHTML);
  })

  var inputs = $(".login").find("input");
  inputs.on('click', function() {
    $(this).css("box-shadow","5px 10px green");
  })
  inputs.on('mouseleave', function() {
    $(this).css("background-color", "grey");
  })

})
