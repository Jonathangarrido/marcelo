'use strict';

(function () {

  var fullHome = function(){
    var fullDiv = $('.fullScreen');
    var altura = $( window ).height();
    fullDiv.css('height', altura + 'px');
  };
  fullHome();

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if(wScroll > $('.slide4-1').offset().top - 100){
      $('.slide4-1').addClass('fade-in');
    }else{
      $('.slide4-1').removeClass('fade-in');
    }

    if(wScroll > $('.slide4-2').offset().top){
      $('.slide4-2').addClass('fade-in');
    }else{
      $('.slide4-2').removeClass('fade-in');
    }

    if(wScroll > $('.slide6').offset().top){
      $('.slide6-1').addClass('fade-in');
    }else{
      $('.slide6-1').removeClass('fade-in');
    }

    if(wScroll > $('.slide6-1').offset().top + 50){
      $('.slide6-2').addClass('fade-in');
    }else{
      $('.slide6-2').removeClass('fade-in');
    }

    if(wScroll > $('.slide6-3').offset().top - 50){
      $('.slide6-3-left').addClass('slide-left');
      $('.slide6-3-right').addClass('slide-right');
    }else{
      $('.slide6-3-left').removeClass('slide-left');
      $('.slide6-3-right').removeClass('slide-right');
    }

    
  });

  


})();