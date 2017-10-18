/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/
/*
   Table Of Content

   1. Preloader
   2. Script for horizontal timeline heading css
   3. Smooth Scroll
   4. Script to control capabilities carousel
   5. Responsive Nav
	 6. Scroll To Top
	 7. Initiat WOW JS
*/
(function ($) {
	'use strict';

	jQuery(document).ready(function () {

		/* Preloader */
		$(window).on('load', function () {
			$('body').addClass('loaded');
		});
		// Script for horizontal timeline heading css
		$("#tl1").hover(function () {
		    $("#tl11").toggleClass("tl-year2");
		});
		$("#tl2").hover(function () {
		    $("#tl22").toggleClass("tl-year2");
		});
		$("#tl3").hover(function () {
		    $("#tl33").toggleClass("tl-year2");
		});
		$("#tl4").hover(function () {
		    $("#tl44").toggleClass("tl-year2");
		});
		/* Smooth Scroll */
		$('a.smoth-scroll').on("click", function (e) {
		    var anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $(anchor.attr('href')).offset().top - 50
		    }, 3000);
		    e.preventDefault();
		});
		// Script to control capabilities carousel
		$("#clients-logo").owlCarousel({
			autoPlay: 3000,
			items: 3,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3],
		});
		//Responsive Nav
		$('li.dropdown').find('.fa-angle-down').each(function () {
			$(this).on('click', function () {
				if ($(window).width() < 768) {
					$(this).parent().next().slideToggle();
				}
				return false;
			});
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
		//Initiat WOW JS
		new WOW().init();

	});

})(jQuery);
