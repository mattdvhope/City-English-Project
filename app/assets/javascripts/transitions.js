$(document).ready(function() {

  $("#place_1").addClass("active");

  $(".page-scroll").on("click", function() {
    event.preventDefault();
    $("#place_1").removeClass("active");
    $("#place_2").removeClass("active");
    $("#place_3").removeClass("active");
    $("#place_4").removeClass("active");
    $(this).addClass("active");
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 300, 'swing');
  });

  // $('a').on("click", function(){
  //   console.log($(this).offset());
  //   $('html, body').stop().animate({
  //     scrollTop: 3   //$(this).offset().top
  //   }, 550, 'swing');
  //   // return false;
  // });


  // var body = $("html, body");
  // body.stop().animate({scrollTop:0}, '500', 'swing', function() { 
  //    alert("Finished animating");
  // });

  // $('a').click(function(e) {
  //   var target = $(this).attr('href');
  //   e.preventDefault();
  //   console.log($(target).offset());
  //   $('html,body').animate({
  //     scrollTop: $(target).offset().top
  //   }, 800, 'swing');
  // });


  // $('a[href^="#"]').on('click',function (e) {
  //   e.preventDefault();

  //   var target = this,
  //   $target = $(target);
  //   console.log(typeof $target.offset().top);

  //   $('html, body').stop().animate({
  //     scrollTop: $target.offset().top
  //   }, 900, 'swing', function () {
  //     window.location.href = $target.offset().top;
  //   });

  // });




});

