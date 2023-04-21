"use strict";

/*  codigo navbar */

var nav = document.querySelector("nav");
    window.addEventListener("scroll", function(){
   if (window.pageYOffset > 100){
    nav.classList.add("menu","shadow");
  }else{
    nav.classList.remove("menu","shadow");
  }

 

  const typed = new Typed('.typed', {
    strings: ['.كل ما تحتاجه في ', 'HTML5-CSS3-JAVASCRIPT.'],

    typeSpeed: 200,
  });


});

