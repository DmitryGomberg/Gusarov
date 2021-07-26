$(document).ready(function () {
   const swiperffedvrf = new Swiper('.swiper-container-clients', {
      // Optional parameters
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next-clients',
         prevEl: '.swiper-button-prev-clients',
      },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
         el: ".swiper-pagination-clients",
         type: "fraction",
      },
   });
   const аауаау = new Swiper('.swiper-container-audio', {
      // Optional parameters
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next-audio',
         prevEl: '.swiper-button-prev-audio',
      },
      slidesPerView: 1,
      pagination: {
         el: ".swiper-pagination-audio",
         type: "fraction",
      },
   });
   const аауdvcdаау = new Swiper('.swiper-container-work', {
      navigation: {
         nextEl: '.swiper-button-next-work',
         prevEl: '.swiper-button-prev-work',
      },
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
         el: ".swiper-pagination-work",
         type: "fraction",
      },
      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 1,
            spaceBetween: 20
         },
         // when window width is >= 480px
         800: {
            slidesPerView: 2,
            spaceBetween: 30
         },
         // when window width is >= 1255px
         1255: {
            slidesPerView: 3
         }
      }
   });
   const аауdvfbfbcdаау = new Swiper('.swiper-container-free', {
      navigation: {
         nextEl: '.swiper-button-next-free',
         prevEl: '.swiper-button-prev-free',
      },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
         el: ".swiper-pagination-free",
         type: "fraction",
      },
   });
   if ($(document).width() < '991') {
      $(".s-s18-door-yandex").attr({
         href: "#modal-yandex"
      });
      $(".s-s18-door-google").attr({
         href: "#modal-google"
      });
      $(".s-s18-door-yandex").attr({
         'data-fancybox': "gallery-yan"
      });
      $(".s-s18-door-google").attr({
         'data-fancybox': "gallery-google"
      });
   }
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
   if ($(document).width() < '1150') {
      $(".tab4_item").not(":first").hide();
      $(".tab4").click(function () {
         $(".tab4").removeClass("active").eq($(this).index()).addClass("active");
         $(".tab4_item").hide().eq($(this).index()).fadeIn();
      }).eq(0).addClass("active");
   }
   $(".tab5_item").not(":first").hide();
   $(".tab5").click(function () {
      $(".tab5").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab5_item").hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass("active");


   $(".tab6_item").not(":last").hide();
   $(".tab6").click(function () {
      $(".tab6").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab6_item").hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass("active");

   $(".tab7_item").not(":first").hide();
   $(".tab7").click(function () {
      $(this).addClass("active");
      $(".tab7").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab7_item").hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass("active");

   $(".tab8_item").not(":first").hide();
   $(".tab8").click(function () {
      $(this).addClass("active");
      $(".tab8").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab8_item").hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass("active");

   var currentTab = 0;
   $('.s-s14-button-wrap').addClass('o');
   $(".s-s14-item").removeClass('active');
   $(".s-s14-step").removeClass('active');
   $(".s-s14-item").eq(currentTab).addClass('active');
   $(".s-s14-step").eq(currentTab).addClass('active');
   if ($(document).width() < '991') {
      $(".s-s14-button-next").click(function () {
         currentTab++;
         console.log(currentTab);
         $('.s-s14-button-wrap').addClass();
         if (currentTab == 0) {
            $('.s-s14-button-wrap').addClass('o');
            $('.s-s14-button-wrap').removeClass('l');
            $('.s-s14-button-wrap').removeClass('s');
         }
         if (currentTab == 1) {
            $('.s-s14-button-wrap').addClass('l');
            $('.s-s14-button-wrap').removeClass('o');
            $('.s-s14-button-wrap').removeClass('s');
         }
         if (currentTab == 2) {
            $('.s-s14-button-wrap').removeClass('o');
            $('.s-s14-button-wrap').removeClass('l');
            $('.s-s14-button-wrap').addClass('s');
            $(".s-s14-next-step-img").addClass('disable');
            $(".s-s14-button-submit").addClass('active');
         }
         console.log(currentTab);
         $(".s-s14-item").removeClass('active');
         $(".s-s14-step").removeClass('active');
         $(".s-s14-item").eq(currentTab).addClass('active');
         $(".s-s14-step").eq(currentTab).addClass('active');
      });
      $(".s-s14-button-before").click(function () {
         currentTab--;
         console.log(currentTab);
         $('.s-s14-button-wrap').addClass();
         if (currentTab == 0) {
            $('.s-s14-button-wrap').addClass('o');
            $('.s-s14-button-wrap').removeClass('l');
            $('.s-s14-button-wrap').removeClass('s');
         }
         if (currentTab == 1) {
            $('.s-s14-button-wrap').addClass('l');
            $('.s-s14-button-wrap').removeClass('o');
            $('.s-s14-button-wrap').removeClass('s');
         }
         if (currentTab == 2) {
            $('.s-s14-button-wrap').removeClass('o');
            $('.s-s14-button-wrap').removeClass('l');
            $('.s-s14-button-wrap').addClass('s');
            $(".s-s14-next-step-img").addClass('disable');
            $(".s-s14-button-submit").addClass('active');
         }
         console.log(currentTab);
         $(".s-s14-item").removeClass('active');
         $(".s-s14-step").removeClass('active');
         $(".s-s14-item").eq(currentTab).addClass('active');
         $(".s-s14-step").eq(currentTab).addClass('active');
      })
   }
   $(".s-s14-next-step-img").click(function () {
      currentTab++;
      console.log(currentTab);
      $('.s-s14-button-wrap').addClass();
      if (currentTab == 0) {
         $('.s-s14-button-wrap').addClass('o');
         $('.s-s14-button-wrap').removeClass('l');
         $('.s-s14-button-wrap').removeClass('s');
      }
      if (currentTab == 1) {
         $('.s-s14-button-wrap').addClass('l');
         $('.s-s14-button-wrap').removeClass('o');
         $('.s-s14-button-wrap').removeClass('s');
      }
      if (currentTab == 2) {
         $('.s-s14-button-wrap').removeClass('o');
         $('.s-s14-button-wrap').removeClass('l');
         $('.s-s14-button-wrap').addClass('s');
         $(".s-s14-next-step-img").addClass('disable');
         $(".s-s14-button-submit").addClass('active');
      }
      console.log(currentTab);
      $(".s-s14-item").removeClass('active');
      $(".s-s14-step").removeClass('active');
      $(".s-s14-item").eq(currentTab).addClass('active');
      $(".s-s14-step").eq(currentTab).addClass('active');
   })


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
   const swiperS = new Swiper('.swiper-container-s', {

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next-s',
         prevEl: '.swiper-button-prev-s',
      },
      autoHeight: true,
      spaceBetween: 40
   });
   const swiperfferf = new Swiper('.swiper-container-review', {
      // Optional parameters
      allowTouchMove: false,
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next-review',
         prevEl: '.swiper-button-prev-review',
      },
      pagination: {
         el: ".swiper-pagination-review",
         type: "fraction",
      },
   });



   var win = $(window).height() - 80;
   $('.s1__links-scroll').click(function () {
      $('body,html').animate({
         scrollTop: win
      }, 800);
      return false;
   });
   $('.s-s1-bonus-arrow').click(function () {
      $('body,html').animate({
         scrollTop: $(window).height()
      }, 800);
      return false;
   });
   $('.city').hover(function (event) {
      $(this).toggleClass('active');
   });
   $('.city').click(function (event) {
      if ($(document).width() > '1150') {
         $(this).toggleClass('show');
         $('body').toggleClass('lock');
         event.preventDefault();
      }
   });
   $('.panel-heading').removeClass('in').next().slideUp();
   $('.panel-heading').click(function () {
      $(this).toggleClass('in').next().slideToggle();
      $('.panel-heading').not(this).removeClass('in').next().slideUp();
      event.preventDefault();
   });
});

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   ll = selElmnt.length;
   /*for each element, create a new DIV that will act as the selected item:*/
   a = document.createElement("DIV");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   /*for each element, create a new DIV that will contain the option list:*/
   b = document.createElement("DIV");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
         /*when an item is clicked, update the original select box,
         and the selected item:*/
         var y, i, k, s, h, sl, yl;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         sl = s.length;
         h = this.parentNode.previousSibling;
         for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("same-as-selected");
               yl = y.length;
               for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
               }
               this.setAttribute("class", "same-as-selected");
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
   });
}

function closeAllSelect(elmnt) {
   /*a function that will close all select boxes in the document,
   except the current select box:*/
   var x, y, i, xl, yl, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   xl = x.length;
   yl = y.length;
   for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove("select-arrow-active");
      }
   }
   for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add("select-hide");
      }
   }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);