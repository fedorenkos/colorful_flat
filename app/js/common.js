 $(document).ready(function(){

     
 

 $('.main_sl').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
      });


// for header

var options = {
  offset: 900
};

var header = new Headhesive('.navbar', options);




$('.js_ancor').click(function(e){
  elementClick = $(this).attr('href');
  destination = $(elementClick).offset().top;
  {
  
  $('html, body').animate({scrolltop: destination}, 6000);
  
  }
  return false;
});

var touch = $('.drop');
  var ul = $('.dropdown');

  $(touch).on('click', function(e){
    e.preventDefault();
    ul.slideToggle();
  });
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 1173 && ul.is(':hidden')){
      ul.removeAttr('style');

    }
  });

$('.popup').magnificPopup();








});



