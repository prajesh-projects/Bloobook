/* 
	define all other plugins here after bootstrap except jquery(which we already called in main.js file)
    */

    $(document).ready(function() {
        //Prevent Page Reload on all # links
        $("body").on("click", "a[href='#']", function(e) {
            e.preventDefault();
        });

        //placeholder
        $("[placeholder]").each(function() {
            $(this).attr("data-placeholder", this.placeholder);
            $(this).bind("focus", function() {
                this.placeholder = '';
            });
            $(this).bind("blur", function() {
                this.placeholder = $(this).attr("data-placeholder");
            });
        });

        // On scroll Add Class
        $(window).scroll(function(e) {
            if ($(window).scrollTop() > 200) {
                $(".wrapper").addClass('page-scrolled');
            } else {
                $(".wrapper").removeClass('page-scrolled');
            }
        });

        // Footer margin set for stick to bottom
        function footerAdj() {
            var footerH = $(".footer").innerHeight();
            $(".footer").css({ "margin-top": -footerH });
            $(".main-content").css({ "padding-bottom": footerH });
        };
        // footerAdj();
        $(window).resize(function() {
            // footerAdj();
            removeMapClass();
        });

        // Add remove class when window resize finished
        var $resizeTimer;
        $(window).on("resize", function(e) {
            if (!$("body").hasClass("window-resizing")) {
                $("body").addClass("window-resizing");
            }
            clearTimeout($resizeTimer);
            $resizeTimer = setTimeout(function() {
                $("body").removeClass("window-resizing");
            }, 250);

            removeMainMenuClass();
        });

        // Add new js functions here -----------------------------------------------------------------
        $('.datepicker').datepicker({
            autoclose:true
        });
        $('.custom-scroll').mCustomScrollbar({ 
            scrollInertia: 250,
            theme:"dark",
        });
        $('.flags-dropdown').select2({
            minimumResultsForSearch: Infinity,
            templateResult: formatState,
            templateSelection: formatState,
            dropdownCssClass: "flags-dropdown-container" 
        });



        function formatState (state) {
          if (!state.id) { return state.text; }
          var $state = $(
            '<div class="flag-option"><em class="thumb"><img src="images/' + state.element.value.toLowerCase() + '.png" class="img-flag" /></em> <span>' + state.text + '</span></div>'
            );
          return $state;
      }

      $('#loginModal').on('show.bs.modal', function (e) {
        setTimeout(function(){
            $('body').addClass('modal-open');
        },500);
        removeMainMenuClass();
    });
      $('#signupModal').on('show.bs.modal', function (e) {
        setTimeout(function(){
            $('body').addClass('modal-open');
        },500);
    });

      var swiper = new Swiper('.hero-block-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
        },
    });

      var swiper = new Swiper('.custom-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
        pagination: {
            el: '.custom-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.custom-next-swiper',
            prevEl: '.custom-prev-swiper',
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 15,
            },

            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
            },
        }
    });

      var swiper = new Swiper('.custom-slider-secondary', {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.custom-next-swiper',
            prevEl: '.custom-prev-swiper',
        },
        breakpoints: {
            575: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          640: {
           slidesPerView: 3,
       },
       1024: {
        slidesPerView: 4,
    },
}
});

      var swiper = new Swiper('.property-listing-slider', {
          slidesPerView: 1,
          spaceBetween:15,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

      var swiper = new Swiper('.property-detail-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.property-detail-next',
            prevEl: '.property-detail-prev',
        },
    });

      function removeMainMenuClass(){
          $('.hamburger').removeClass("is-active");
          $('body, html').removeClass("show-menu");
      }
      $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('body, html').toggleClass("show-menu");
    });


      $(".header .has-sub-menu > a").click(function(){
        if($(window).width() < 768){
           $(this).closest(".has-sub-menu").toggleClass("toggle");
           $(this).closest(".has-sub-menu").find(".nav-sub-menu").stop(false,false).slideToggle();
       }
   });


        // property-listing --------------

        $(".property-listing-page .sm-map-and-short-btns .show-filter-btn").click(function(){
            $('body, html').toggleClass("show-property-listing-filter");
        });
        $(".property-listing-page .sm-map-and-short-btns .show-map-btn").click(function(){
            $(this).find(".active").removeClass("active").siblings().addClass("active");
            $('body, html').toggleClass("show-property-listing-map");
        });
        $(".property-listing-page .sm-filter-input-close").click(function(){
            $('body, html').removeClass("show-property-listing-filter");
        });
        function removeMapClass()
        {
            if ($(window).width() > 1024){ $('body, html').removeClass("show-property-listing-map"); }
        }

        $(".filter-popup-wrapper .filter-popup-input").click(function(){
            var _this = $(this)
            _this.closest(".form-group").siblings().find(".filter-popup-wrapper .filter-popup-dropdown").stop(false,false).fadeOut();
            _this.closest(".filter-popup-wrapper").find(".filter-popup-dropdown").stop(false,false).fadeToggle();
        });


        // Don't add anything below this --------------------------------------------------------------
        // Add Class on Window Load
        $("body").addClass("page-loaded");
    });
