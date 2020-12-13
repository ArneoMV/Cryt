$(document).ready(function() {

  

  $("#cryt-header").load("header.html");
  $("#cryt-secondary-navigation").load("secondary-navigation.html");

  $('.brand-1').on('click', function() {
    $(this).css( "transform", "translate3d(0px, -25vh, 0px)");
    $('.brand-1 .icon.x').css( "background", "rgb(236, 242, 247) none repeat scroll 0% 0%");
    $('.brand-1 .__word-content').css( "display", "block");
  });

  
  // let brand_1 = document.querySelector(".brand-1")
  // brand_1.addEventListener('click', () => {
  //   showBrand1 = !showBrand1

  //   if(showBrand1 === true) {
  //     $('.brand-1 .icon.x').css( "background", "rgb(236, 242, 247) none repeat scroll 0% 0%")
  //   } else {
  //     $('.brand-1 .icon.x').css( "background", "none")
  //   }

  //   let showBrand1 = false
  // });



  $('.brand-2').on('click', function() {
    $('.brand-2').css( "transform", "translate3d(0px, -25vh, 0px)")
  });
  $('.brand-3').on('click', function() {
    $('.brand-3').css( "transform", "translate3d(0px, -25vh, 0px)")
  });

});

