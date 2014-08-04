/*===================================================================================*/
/*	SMOOTH SCROLL
/*===================================================================================*/ 
    $(window).on('page:change', function () {
        smoothScroll.init({
           speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            updateURL: true // Boolean. Whether or not to update the URL with the anchor hash on scroll

        });
    });
/*===================================================================================*/
/*	LIGHTBOX
/*===================================================================================*/
     $(window).on('page:change', function () {
        $('.lightbox').magnificPopup({type:'image'});
      });

/*===================================================================================*/
/*	HEADER SHRINK
/*===================================================================================*/
      $(window).scroll(function () {
        if ($(document).scrollTop() < 120) {
          $('.navbar').removeClass('tiny');
        } else {
          $('.navbar').addClass('tiny');
        }
      });
      
/*===================================================================================*/
/*	CLOSE NAVBAR DROPDOWN WHEN LINK CLICKED ON MOBILE
/*===================================================================================*/
    // call jRespond and add breakpoints
    var jRes = jRespond([
        {
            label: 'handheld',
            enter: 0,
            exit: 767
        },{
            label: 'tablet',
            enter: 768,
            exit: 979
        },{
            label: 'laptop',
            enter: 980,
            exit: 1199
        },{
            label: 'desktop',
            enter: 1200,
            exit: 10000
        }
    ]);

    // register enter and exit functions for a single breakpoint
    jRes.addFunc({
        breakpoint: 'handheld',
        enter: function() {
          $('.navbar-collapse a').click(function(){
              $(".navbar-collapse").collapse('hide');
          });
        }
    });