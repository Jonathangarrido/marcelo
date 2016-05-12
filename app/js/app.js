'use strict';

(function () {

  var fullHome = function(){
    var fullDiv = $('.fullScreen');
    var altura = $( window ).height();
    fullDiv.css('height', altura + 'px');
  };
  fullHome();

  

})();