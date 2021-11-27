$(document).ready(function () {


  $(".opn").on("click", function () {
    $("nav").stop().animate({
      "right": "0"
    })
  })

  $(".close").on("click", function () {
    $("nav").stop().animate({
      "right": "-100%"
    })
  })



  $(".guideimg").slick({
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 800,
    arrows:false
  });

  $(".eventimg .wrap").slick({
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 800,
    arrows:false
  });

  var weddingFixStart = $(".event").offset().top;
  var weddingFixEnd = weddingFixStart + $(".weddingpho").height();
  var refix = weddingFixEnd - weddingFixStart
  $(".eventfix").css({
    "marginTop" : $(".weddingpho").height()
  });
  
  $(window).on("scroll",function(){
    var scr =$(this).scrollTop();
    var winHeight = $(window).height();

    var hanockStart = $(".hanock").offset().top - winHeight / 2;
    if(scr >= hanockStart) { 
      $(".hanock").addClass("on")
    } 
    var weddingFixStart = $(".event").offset().top;
    var guideFixStart = $(".guidefix").offset().top;
    var imgHeight = $(".guide .guidefix img").height();
    var guideFixEnd = $(".guide .explain .wrap > p").offset().top
    var guideFixEndPos = $(".guide .explain .wrap > p").position().top;

    if(scr >= guideFixStart && scr < guideFixEnd - imgHeight){
      $(".guidefix img").css({
        "position" : "fixed",
        "top" : 0,
        "right" : 0
      })
    } else if(scr < guideFixStart) {
      $(".guidefix img").css({
        "position" : "absolute",
        "top" : 0,
        "right" : 0
      })
    } else {
      $(".guidefix img").css({
        "position" : "absolute",
        "top": guideFixEndPos - imgHeight,
        "right":0
      })
    }

    if (scr >= weddingFixStart && scr < weddingFixEnd){
      $(".event  .weddingpho").css({
        "position" : "fixed",
        "top" : 0,
        "left" : 0,
      })
      $(".event .col").css({
        // "margin-bottom":0
      })
    }else if(scr >= weddingFixEnd){
      $(".event .weddingpho").css({
        "position" : "absolute",
        "top" : refix,
        "left" : 0,
        "bottom" : "unset"
      })
    } else if(scr < weddingFixStart) {
      $(".event .weddingpho").css({
        "position" : "absolute",
        "top" : "0",
        "left": "0",
      })
    }
 
   
  })

  
  

})