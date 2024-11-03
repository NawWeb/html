// slider js

$('.testi_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    arrows: false,
    dots: true
  });
                  
// slider js

// counter up
$(window).on("load", function (){
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });
});
// counter up

// mixit up
var mixer = mixitup('.mixit');
// mixit up


// back to top

$(".top").click(function(){
    $("html, body").animate({
      scrollTop:0,
    });
})

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 500){
      $(".top").fadeIn(500)
    }
    else{
      $(".top").fadeOut(500)
    }
})

// back to top

// preeloder
$(window).on("load",function(){
    $(".preeloder").fadeOut().delay(300);
})
// preeloder