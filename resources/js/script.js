$(window).on("load",function(){
    $('#status').fadeOut(1000);
    $('#preloader').delay(1100).fadeOut(1000);
})

// Carousel
$(document).ready(function () {
    $("#team-members").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            // 600: {
            //  items: 2,
            // },
            1000: {
                items: 2,
            },
        },
    });
});
// Progress Bar
$(document).ready(function () {
    $("#progress-elements").waypoint(
        function () {
            $(".progress-bar").each(function () {
                $(this).animate(
                    {
                        width: $(this).attr("aria-valuenow") + "%",
                    },
                    3000
                );
            });

            this.destroy();//do only one time
        },
        { offset: "bottom-in-view" }//work at reach point
    );
});
// Responsive Tags
$(document).ready(function(){
    $('#services-tab').responsiveTabs({
        animation: 'slide',
});
});

// Portfolio ....Isotope
$(window).on("load",function(){
   // init Isotope
 $('.isotope-container').isotope({
    // options
  });
  // filter items on button click
  $('#isotope-filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.isotope-container').isotope({ filter: filterValue });
    // Active Button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });

    
});
// Magnific pop up
$(document).ready(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
          }
      });

});
// Testimonial Section

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            // 600: {
            //  items: 1,
            // },
            1000: {
                items: 1,
            },
        },
    });
});
// Stat Counter
$(document).ready(function () {
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
});
// Client Section
$(document).ready(function () {
    $("#client-list").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            // if the size is 600,number of item has to be 3.
            600: {
             items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});

// Map Section
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
// Nav Section
$(document).ready(function () {
    $(window).scroll(function(){
        //For Show
        // For you scroll up,navbar's color will be changed
        if($(window).scrollTop()>50){
            // white-nav-top(one of bootstrap classes) means that navbar will be show as a white color background
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src","./resources/img/logo/logo-dark.png");

            $("#back-to-top").fadeIn();
        }
        else{
            //For Hide
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src","./resources/img/logo/logo.png");

            $("#back-to-top").fadeOut();
        }
    })
});

// Scroll effect
$(document).ready(function(){
$("a.smooth-scroll").click(function (event){
    event.preventDefault();
    var select_id=$(this).attr("href");
    $('html,body').animate({scrollTop:$(select_id).offset().top-64},1250,"easeInOutExpo")
})
})