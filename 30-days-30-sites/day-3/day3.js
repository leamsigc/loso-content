var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
 var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /*for (i = 0; i > dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }*/
    slides[slideIndex - 1].style.display = "block";
   /* dots[slideIndex - 1].className += " active";*/
}
/*GOOGLE MAP TO THE SITE */
function myMap(){
    var mapCanvas=document.getElementById('map');//get the map container
    var mapOptions={
        center:new google.maps.LatLng(51.5, -0.2),
        zoom:10

    };
    var map= new google.maps.Map(mapCanvas,mapOptions);
};
