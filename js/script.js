                    /* ====================================
                                    PreLoader
                    ======================================*/  

$(window).on("load", function(){ //Make Sure All Website Is Loaded.
    $("#status").fadeOut();
    // Make Preloader white background white fadeout slowly
    $('#preloader').delay(350).fadeOut('slow');
    });

                        /* ====================================
                                Carousel  <>  Team
                        ======================================*/  

$(function(){//Structure only should be fully loaded to do the job
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        dots: false, /* Those Three dots will be hidden */
        nav: true,
        navText: ['<i class="fa fa-angle-double-left fa-1x"></i>',
        '<i class="fa fa-angle-double-right fa-1x"></i>']
    });
});
                            /* ====================================
                                    Progress Bars animation
                            ======================================*/  

$(function(){ //Structure only should be fully loaded to do the job
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            //this referes to the current progress bar
            //attr will get u the attribute
            $(this).animate({width: $(this).attr("aria-valuenow") +"%"},500);
        });
        this.destroy(); // destroy the event once scrolled down, so u won't have to do it again wn scrolling up
    }, {offset: 'bottom-in-view'});//{offset:'bottom-in-view'} hédha yétsama t3ada k objet f js tét3ada f parm waypoint
        // when the progress bar hit the bottom of browser
});

                                /* ====================================
                                        Responsive Tabs
                                ======================================*/  
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
                                /* ====================================
                                                Portfolio
                                ======================================*/  

$(window).on('load', function () { //Content should be fully loaded to do the job
    
    $("#isotope-container").isotope({   /* Initialize istope */ });
    //Filter Items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //when click on the button with value istope-filter this happen:
        // 1-Get the filter value (get me the filter value that user just clicked by the attribut, héka aléh sta3mlna (this))
        var filterValue= $(this).attr('data-filter');
        // 2- Filter value
        $("#isotope-container").isotope ({ // we are passing an object with one value
            filter: filterValue     //filter is the name and filterValue our value
        });
                // active button
        $("#isotope-filters").find('.active').removeClass('active');
        /*to find active state btn then remove the active state from the class when u choose another btn to click on*/
        $(this).addClass('active'); //this btn take he active class
    });
});


                                    /* =====================
                                            Magnifier
                                    =======================*/ 

$(function(){ /*Document Ready Method*/
    $('#portfolio-wrapper').magnificPopup({ //catch the parent
        delegate :'a', //child items selector by clicking on <a> it popup will open
        type:"image",
        gallery:{ //pass into gallery js object   
            enabled: true
        }
    });
});
                                /* =============================
                                        What Our Clients Say 
                                ================================*/  


$(function(){//Structure only should be fully loaded to do the job
    $("#testimonial-slider").owlCarousel({
        items: 1, //Show card one By One
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        dots: false, /* Those Three dots will be hidden */
        nav: true,
        navText: ['<i class="fa fa-angle-double-left fa-1x"></i>',
        '<i class="fa fa-angle-double-right fa-1x"></i>']
    });
});


                                    /* =============================
                                                Counter 
                                    ================================*/  

$(function(){
    $('.counter').counterUp({ /*counterUp method with two options(delay&time) */
        delay: 10, /*ba2d ma tra counter b9adéh béch tétlansa*/
        time: 1000 /*9adéh yo93od béch ykaml*/
    });
})


                                    /* =============================
                                                Clients
                                    ================================*/

$(function(){//Structure only should be fully loaded to do the job
    $("#clients-list").owlCarousel({
        items: 6, //Show 6 logo 
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        dots: false, /* Those Three dots will be hidden */
        nav: true,
        navText: ['<i class="fa fa-angle-double-left fa-1x"></i>',
        '<i class="fa fa-angle-double-right fa-1x"></i>'],
        responsive: { /* To show our clients section depending on the screeen width */
            //breakpoint from 0 up
            0: {
                items:2
            },
            //breakpoint from 480 up
            480: {
                items:3
            },
            //breakpoint from 768 up
            768: {
                items:6
            }
        
        }
    });
});

                    /* ====================================
                                Go To Top Button
                    ======================================*/  

$(document).ready(function(){
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
            } 
            else {
                $('#back-to-top').fadeOut();
			}
		});
	});
});
/* ===================================================================================================
        Collapse Menu (w9teli nenzelw ala link f collapse menu yhezna lsection héki w ysakr el menu)
=====================================================================================================*/

$(function () {

    $('.navbar-nav>li>a').on('click', function(){

        $('.navbar-collapse').collapse('hide');
    });

});


                                    /* =============================
                                                Page Animation
                                    ================================*/

    /* =============================
            >Animate on Scroll
    ================================*/
                                    
$(function () {
    //Activate Wow Plugin
    new WOW().init(); 
});



                                /* ====================================
                                        Responsive Tabs
                                ======================================*/  
MSGesture













                                    /* =============================
                                                Google Map
                                    ================================*/
/*
$(window).on('load', function () {  


        var addressString="Rue nesrine-imm Akkari Achour cité- menazah, Kalâa Seghira 4021";
        var myPosition = {lat: 35.831182, lng: 10.582229};
        
        // 1- Render The map
        var map = new google.maps.Map(document.getElementById('map'), {zoom: 11, center: myPosition});
        
        // 2- Add Marker
        var marker = new google.maps.Marker({position: myPosition,
            map: map,
            title: "Click to see the adress"
            });
      
        // 3- Info Window
        var infowindow = new google.maps.InfoWindow({
            content: addressString
        });
        // Show info when user clicks marker
        marker.addListener('click', function(){
            infowindow.open(map,marker);
        })

});
*/

























