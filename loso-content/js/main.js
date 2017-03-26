// ======Show and hide  the nav in the main page ======
// Show and hide menu
$(document).ready(function(){
   'use strict';

$(window).scroll( function(){ // we select the window
'use strict'
if($(window).scrollTop() < 80 ){ // if the window is less scroll from the top 80px
    $('.navbar').css({ //we select the .navbar and apply some css to it
     'margin-top':'-100px',
     'opacity':'0'
    });
    $('.navbar-default').css({
      'background':'rgba(59,59,59,0)'
    });

}
else{ // if the window is scroll more than 80px the this is gonna aply to the window
   $('.navbar').css({
     'margin-top':'0',
     'opacity':'1'
   });
   $('.navbar-default').css({
      'background':'rgba(59,59,59,0.7)',
      'border-color':'#444'
    });
}
});

});
