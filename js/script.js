$(document).ready(function () {
   console.log('fedfd');
   let header = $('.header');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
         header.addClass('header_fixed');

      } else {
         header.removeClass('header_fixed');
      }
   });
   $('body,html').animate({
      scrollTop: 0
   }, 0);
   $(".tab_item").not(":last").hide();
   $(".tab").removeClass("active");
   $(".tab").click(function () {
      $(".tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide().eq($(this).index()).fadeIn();
   });

   $(".tab2_item").not(":first").hide();
   $(".tab2").click(function () {
      $(".tab2").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab2_item").hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass("active");

   $(".tab3_item").hide();
   $(".tab3").addClass("active")
   $(".tab3").click(function () {
      $(".tab3").removeClass("active").eq($(this).index()).addClass("active");
      $(".s4__tap").hide();
      $(".tab3_item").hide().eq($(this).index()).fadeIn();
   });
   if ($(document).width() > '991') {
      // Scrollbar.initAll();
      $(".team-img").hover(function () {
            $(".member-team-info").removeClass('active');
            $(".team-img").parent().removeClass('active');
            $(this).parent().addClass("active");
            $(this).parent().next().addClass('active');
         },
         function () {
            $(".member-team-info").removeClass('active');
            $(".team-img").parent().removeClass('active');
         }
      );
   } else {
      $(".member-team-info").addClass('active');
      $(".team-img").parent().addClass('active');
   }
   if ($(document).width() > '991') {
      $('.menu-close, .menu-open').click(function (event) {
         $('.header__menu').toggleClass('active');
         $('body').toggleClass('lock');
         console.log('true');
      });
   } else {
      $('.header__mob-close, .menu-open').click(function (event) {
         $('.header-mob-menu').toggleClass('active');
         $('body').toggleClass('lock');
         console.log('false');
      });
   }





   const swiper = new Swiper('.swiper-container-part', {
      // Optional parameters
      slidesPerView: 4,
      // If we need pagination
      pagination: {
         el: '.swiper-pagination-part',
         clickable: true
      },

      breakpoints: {
         300: {
            slidesPerView: 2,
            spaceBetween: 40,
         },
         400: {
            slidesPerView: 3,
            spaceBetween: 40,
         },
         575: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
         1024: {
            slidesPerView: 5,
            spaceBetween: 50,
         },
      },

   });

   const swiperCou = new Swiper('.swiper-container-cou', {

      navigation: {
         nextEl: '.swiper-button-next-cou',
      },
      breakpoints: {
         300: {
            slidesPerView: 1,
            spaceBetween: 20
         },
         700: {
            slidesPerView: 2,
            spaceBetween: 10
         },
         1900: {
            slidesPerView: "auto",
         }
      },
      navigation: {
         nextEl: '.swiper-button-next-cou',
      },
      autoHeight: true,
      pagination: {
         el: ".swiper-pagination-cou",
         type: "fraction",
      },
   });

   const swiperOff = new Swiper('.swiper-container-off', {
      slidesPerView: "auto",
      navigation: {
         nextEl: '.swiper-button-next-off',
      },
      autoHeight: true,
      pagination: {
         el: ".swiper-pagination-off",
         type: "fraction",
      },
   });

   const swiperCd = new Swiper('.swiper-container-cd', {
      slidesPerView: "auto",
      navigation: {
         nextEl: '.swiper-button-next-cd',
      },
      autoHeight: true,
      pagination: {
         el: ".swiper-pagination-cd",
         type: "fraction",
      },
      spaceBetween: 20,
   });

   var win = $(window).height() - 80;
   $('.s1__links-scroll').click(function () {
      $('body,html').animate({
         scrollTop: win
      }, 800);
      return false;
   });


});