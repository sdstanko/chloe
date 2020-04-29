$(document).ready(function () {
	/* fixed header */

	let header = $('.page-header');
	let intro = $('.intro');
	let introHeight;
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load resize',
		function () {
			introHeight = intro.innerHeight();
			scrollPos = $(this).scrollTop();

			console.log(scrollPos);

			if (scrollPos >= introHeight) {
				header.addClass('fixed');
			} else {
				header.removeClass('fixed');
			}

		});


	/* burger menu */

	$('.page-header__burger').click(function (event) {
		$('.page-header__burger, nav').toggleClass('active');
	});

	/* smooth scroll */

	$('[data-scroll]').on('click',
		function (event) {
			event.preventDefault();

			let elementClass = $(this).data('scroll');
			let elementOffset = $(elementClass).offset().top;

			$('.nav').removeClass('active');

			$('html, body').animate({
				scrollTop: elementOffset
			}, 700);
		});

	var mySwiper = new Swiper('.gallery__container', {
		// Optional parameters
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
		},

		spaceBetween: 30,
		direction: 'horizontal',
		loop: true
	})


});