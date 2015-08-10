$(document).ready(function() {

  $("#place_1").addClass("active");

  $(".page-scroll").on("click", function() {
    $("#place_1").removeClass("active");
    $("#place_2").removeClass("active");
    $("#place_3").removeClass("active");
    $("#place_4").removeClass("active");
    $(this).addClass("active");
  });


  $('a').on("click", function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 550, 'swing').attr('href');
    return false;
  });

});

