// ======Show and hide  the nav in the main page ======
// Show and hide menu
$(document).ready(function(){
   'use strict';

$(window).scroll( function(){ // we select the window
'use strict'
if($(window).scrollTop() < 80 ){ // if the window is less scroll from the top 80px
  // remove the active class to the #home when menu is hide
    $(".navbar-nav li a[href='#home']").parent().removeClass("active");
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
    $('.navbar-brand ').css({
      // 'height':'35px',
      'padding':'5px'
    });
    $('.navbar-nav >li>a').css({
      'padding-top':'15px'
    });
}
});

});
// smoth scrolling efect 
$(document).ready(function(){
  'use strict';
  $('.nav-item,#scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
})
// make the menu items active on click
$(document).ready(function(){
  'use strict';
  $('.navbar-nav li a').click(function(){ 
    'use strict';
      $('.navbar-nav li a').parent().removeClass("active");
      $(this).parent().addClass("active");
  });
});
// higlight menu item on scroll
$(document).ready(function(){
'use strict';
      $(window).scroll( function(){
        'use strict';
        $("section").each(function () {
            'use strict';
            var bb = $(this).attr("id");// selec te section atributes returt # of the section
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            //add clas to courent section
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
                  $(".navbar-nav li a[href='#"+ bb +"']").parent().addClass("active");
            }
          // else remove class
          else{
            $(".navbar-nav li a[href='#" + bb +"']").parent().removeClass("active");
          }
        });
      });

});
// add some auto padding
$(document).ready(function (){
'use strict';
   setInterval ( function(){
     'use strict';
     var windowHight = $(window).height();
     var containerHeight = $('.header-container').height();
     var padTop = windowHight - containerHeight;
     $(".header-container").css({
        'padding-top': Math.round(padTop/2) + 'px',
        'padding-bottom': Math.round(padTop/2) + 'px'

     });
   }, 10)

});
// bx slider custom js
$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth : 292.5,
    auto : true,
    minslides:1,
    maxslides:3,
    slideMargin:50
  });
});