'use strict';

(function () {

  var fullHome = function(){
    var fullDiv = $('.fullScreen');
    var altura = $( window ).height();
    fullDiv.css('height', altura + 'px');
  };
  fullHome();

  var ancho = window.innerWidth;
  
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

    if(wScroll > $('.slide6-3').offset().top - 200){
      $('.slide6-3-left').addClass('slide-left');
      $('.slide6-3-left').addClass('zIndex');
      $('.slide6-3-right').addClass('slide-right');
      $('.slide6-3-right').addClass('zIndex');
    }else{
      $('.slide6-3-left').removeClass('slide-left');
      $('.slide6-3-right').removeClass('slide-right');
    }
    if(wScroll > $('.slide7').offset().top){
      $('.slide6-3-left').removeClass('slide-left');
      $('.slide6-3-left').removeClass('zIndex');
      $('.slide6-3-right').removeClass('slide-right');
      $('.slide6-3-right').removeClass('zIndex');
    }

    if(wScroll > $('.slide8').offset().top + 200){
      $('.slide8-1').addClass('fade-in');
      $('.slide8').addClass('bg-slide8');
    }else{
      $('.slide8-1').removeClass('fade-in');
      $('.slide8').removeClass('bg-slide8');
      
    }

    // POSITION FIXED 
    if(wScroll > $('.slide7').offset().top){
      $('.slide8').addClass('zIndex');
    }else{
      $('.slide8').removeClass('zIndex');
    }
    if(wScroll > $('.slide9').offset().top){
      $('.slide8').removeClass('zIndex');
    }


    if(wScroll > $('.slide10').offset().top){
      $('.slide10-dual').addClass('zIndex');
    }else{
      $('.slide10-dual').removeClass('zIndex');
    }
    if(wScroll > $('.slide10-fin').offset().top){
      $('.slide10-dual').removeClass('zIndex');
    }

    if(ancho>=720) {
      var anchoimg = $('#punto').height();
      var posit =  144 + anchoimg;

    
      if(wScroll > $('.slide10-fin').offset().top){
        $('.slide11').addClass('zIndex');
      }else{
        $('.slide11').removeClass('zIndex');
      }

      if(wScroll > $('.slide11').offset().top + 115){
        $('.slide11-principal').addClass('stiky');
      }else{
        $('.slide11-principal').removeClass('stiky');
      }

      if(wScroll > $('.slide11').offset().top + $(window).height()/1.58){
        $('.slide11-txt-1').addClass('stiky2');
        $('.slide11-txt-1').css('top',posit);
      }else{
        $('.slide11-txt-1').removeClass('stiky2');
        $('.slide11-txt-1').css('top',0);
      }


      if(wScroll > $('.slide11').offset().top + $(window).height()/.94){
        $('.slide11-txt-2').addClass('stiky2');
        $('.slide11-txt-2').css('top',posit);
      }else{
        $('.slide11-txt-2').removeClass('stiky2');
        $('.slide11-txt-2').css('top',0);
      }

      if(wScroll > $('.slide11').offset().top + $(window).height()/.665){
        $('.slide11-txt-3').addClass('stiky2');
        $('.slide11-txt-3').css('top',posit);
      }else{
        $('.slide11-txt-3').removeClass('stiky2');
        $('.slide11-txt-3').css('top',0);
      }
    }
    

    
  });

  


})();