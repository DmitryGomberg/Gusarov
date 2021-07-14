$( document ).ready(function() {
    $(".tab_item").not(":first").hide();
    $(".tab").click(function(){
       $(".tab").removeClass("active").eq($(this).index()).addClass("active");
       $(".tab_item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");

    $('.menu-close, .menu-open').click(function (event) {
      $('.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});