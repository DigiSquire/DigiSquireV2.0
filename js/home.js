/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/

/*
   Table Of Content

   1. Preloader
   2. Script for contact-us page css
   3. Script to Activate the Carousel
   4. Google Map
*/

(function ($) {
	'use strict';

	jQuery(document).ready(function () {
		/* Preloader */
		$(window).on('load', function () {
			$('body').addClass('loaded');
		});
		//script for contact-us page start
		$(window).on('load', function () {
			$('#eId').addClass('email-load');
		});
		$("#email1").focus(function(){
			$('#eId').removeClass('email-load');
    });
		$('#email1').blur(function()
		{
			if(!$(this).val() ) {
				  $('#eId').addClass('email-load');
			}
		});
		/* Smooth Scroll */
		$('a.smoth-scroll').on("click", function (e) {
		    var anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $(anchor.attr('href')).offset().top - 50
		    }, 3000);
		    e.preventDefault();
		});
		/* Scroll To Top */
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 500) {
				$('.scroll-to-top').fadeIn();
			} else {
				$('.scroll-to-top').fadeOut();
			}
		});
		$('.scroll-to-top').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		/* Google Map */
		 $('#my-address').gMap({
		    zoom: 5,
		    scrollwheel: true,
		    maptype: 'ROADMAP',
		    markers:[
		   {
		    address: "103,Chitrakoot Apartments,Model Colony, Shivajinagar, Pune, Maharashtra 411053",  /* You can change your address from here */
		     html: "<b>Address</b>: <br>103,Chitrakoot,Chatushringi Road,Model Colony,Pune,Maharashtra,India 411053",   /* You can change display address text from here */
		     popup: true
		    }
		    ]
		    });
	});

})(jQuery);
