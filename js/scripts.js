
/***************** Waypoints ******************/

$(document).ready(function() {


	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.menu_bar').css('display','block !important');
		$('nav ul li').css('text-align','center');
		$('nav ul li').css('width','100%');
		$('nav ul li a').css('padding','0');
		$('nav ul li').css('margin','2px auto');
		$('.top-nav').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
	/*$('#1').click(function()
	
	{
		$('.description').fadeIn();
		$('.sec_2, .sec_3, .sec_4, .sec_5, .sec_6').fadeOut();
		$('.sec_1').css('display','block');
		$('body, html').css('overflow','hidden');
	});
	$('#2').click(function()
	{
		$('.description').fadeIn();
		$('.sec_1').fadeOut();
		$('.sec_3').fadeOut();
		$('.sec_4').fadeOut();
		$('.sec_5').fadeOut();
		$('.sec_6').fadeOut();
		$('.sec_2').css('display','block');
		$('body, html').css('overflow','hidden');
	});
	$('#3').click(function()
	{
		$('.description').fadeIn();
		$('.sec_2, .sec_1, .sec_4, .sec_5, .sec_6').fadeOut();
		$('.sec_3').css('display','block');
		$('body, html').css('overflow','hidden');
	});
	$('#4').click(function()
	{
		$('.description').fadeIn();
		$('.sec_2, .sec_3, .sec_1, .sec_5, .sec_6').fadeOut();
		$('.sec_4').css('display','block');
		$('body, html').css('overflow','hidden');
	});
	$('#5').click(function()
	{
		$('.description').fadeIn();
		$('.sec_2, .sec_3, .sec_4, .sec_1, .sec_6').fadeOut();
		$('.sec_5').css('display','block');
		$('body, html').css('overflow','hidden');
	});
	$('#6').click(function()
	{
		$('.description').fadeIn();
		$('.sec_2, .sec_3, .sec_4, .sec_5, .sec_1,.sec_7').fadeOut();
		$('.sec_6').css('display','block');
		$('body, html').css('overflow','hidden');
	});*/
	$('.close').click(function()
	{
		$('body, html').css('overflow-y','scroll');
		$('.sec_6, .sec_2, .sec_3, .sec_4, .sec_5, .sec_1, .description, .google_doc,.iframe_1, .iframe_2, .iframe_3').fadeOut();
	});
	$('.expand_1').click(function()
	{
		$('.iframe_2, .iframe_3').fadeOut();
		$('.google_doc, .iframe_1').fadeIn();
		$('.iframe_1').css('height','100%');
		$('body, html').css('overflow','hidden');
	})
	$('.expand_2').click(function()
	{
		$('.iframe_1, .iframe_3').fadeOut();
		$('.google_doc, .iframe_2').fadeIn();
		$('.iframe_2').css('height','100%');
		$('body, html').css('overflow','hidden');
	})
	$('.expand_3').click(function()
	{
		$('.iframe_2, .iframe_1').fadeOut();
		$('.google_doc, .iframe_3').fadeIn();
		$('.iframe_3').css('height','100%');
		$('body, html').css('overflow','hidden');
	})
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

$(document).ready(function() {
   $('.i').mouseenter(function() {
       $(this).animate({
           height: '+=5px',
		   width: '+=5px'
       });
   });
   $('.i').mouseleave(function() {
       $(this).animate({
           height: '-=5px',
		   width: '-=5px'
       }); 
   });
   
});

var options= {
    "particles": {
        "number": {
            "value":99,
            "density": {
                "enable": true, "value_area": 552.4033491425909
            }
        }
        ,
        "color": {
            "value": "#ffffff"
        }
        ,
        "shape": {
            "type":"circle",
            "stroke": {
                "width": 0, "color": "#000000"
            }
            ,
            "polygon": {
                "nb_sides": 3
            }
            ,
            "image": {
                "src": "img/github.svg", "width": 70, "height": 100
            }
        }
        ,
        "opacity": {
            "value":1,
            "random":true,
            "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }
        ,
        "size": {
            "value":2,
            "random":true,
            "anim": {
                "enable": false, "speed": 40, "size_min": 0.1, "sync": false
            }
        }
        ,
        "line_linked": {
            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }
        ,
        "move": {
            "enable":true,
            "speed":1.5782952832645452,
            "direction":"none",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract": {
                "enable": false, "rotateX": 600, "rotateY": 1200
            }
        }
    }
    ,
    "interactivity": {
        "detect_on":"canvas",
        "events": {
            "onhover": {
                "enable": false, "mode": "repulse"
            }
            ,
            "onclick": {
                "enable": true, "mode": "repulse"
            }
            ,
            "resize":true
        }
        ,
        "modes": {
            "grab": {
                "distance":400,
                "line_linked": {
                    "opacity": 1
                }
            }
            ,
            "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            ,
            "repulse": {
                "distance": 200, "duration": 0.4
            }
            ,
            "push": {
                "particles_nb": 4
            }
            ,
            "remove": {
                "particles_nb": 2
            }
        }
    }
    ,
    "retina_detect":false
}

;
particlesJS("particle", options);