"use strict";

/*  codigo navbar */

var nav = document.querySelector("nav");
    window.addEventListener("scroll", function(){
   if (window.pageYOffset > 100){
    nav.classList.add("menu","shadow");
  }else{
    nav.classList.remove("menu","shadow");
  }


var typed = new typed('.type', {
strings: ['مرحبا في موقع نصرو',
         'تجربة في جافاسكريپت',],

    typeSpeed: 200,



});

});


