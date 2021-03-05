$(document).ready(function () {
	// TweenMax.registerPlugin(MorphSVGPlugin);

	const tl_1 = new TimelineMax({ repeat: -1 });
	const tl_2 = new TimelineMax({ repeat: -1 });
	const tl_3 = new TimelineMax({ repeat: -1 });
	const tl_4 = new TimelineMax({ repeat: -1 });





	// tl_1.to(".start-1", 7, { morphSVG: ".second-1", shapeIndex: 7, ease: 'linear' })
	// .to(".start-1", 11, { morphSVG: ".second-4", shapeIndex: 7, ease: 'linear' });

	// tl_2.to(".start-2", 7, { morphSVG: ".second-2", shapeIndex: 3, ease: 'linear' })
	// .to(".start-2", 9, { morphSVG: ".second-1", shapeIndex: 1, ease: 'linear' });

	// tl_3.to(".start-3", 7, { morphSVG: ".second-3", ease: 'linear' })
	// .to(".start-3", 7, { morphSVG: ".second-2", ease: 'linear' });

	// tl_4.to(".start-4", 7, { morphSVG: ".second-4", ease: 'linear' })
	// .to(".start-4", 4, { morphSVG: ".second-3", ease: 'linear' });


	// TweenMax.to(".start-1", 5, { morphSVG: ".second-1", shapeIndex: 7 });
	// TweenMax.to(".start-2", 5, { morphSVG: ".second-2", shapeIndex: 7 });
	// TweenMax.to(".start-3", 5, { morphSVG: ".second-3", shapeIndex: 7 });
	// TweenMax.to(".start-4", 5, { morphSVG: ".second-4", shapeIndex: 7 });
	// TweenMax.to(".start-4", 5, { morphSVG: ".second-4", shapeIndex: 7 });
	// TweenMax.to(".list-start-1", 5, { morphSVG: ".list-second-1" });
	// TweenMax.to(".list-start-2", 5, { morphSVG: ".list-second-2" });
	// TweenMax.to(".list-start-3", 5, { morphSVG: ".list-second-3" });
	// TweenMax.to(".list-start-4", 5, { morphSVG: ".list-second-4" });
	// objectFitImages();

	// Табы
	// function tabs(buttonsList, wrapper, tabBlock) {
	// 	$(buttonsList).on('click', 'li:not(.active)', function () {
	// 		$(this).addClass('active').siblings().removeClass('active')
	// 			.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
	// 	})
	// }

	// function toggleTabs(top, bottom, topActive) {
	// 	$(top).on('click', function (ev) {
	// 		let text = $(this).next(bottom);

	// 		if ($(this).hasClass(topActive)) {
	// 			text.stop().slideUp();
	// 			$(this).removeClass(topActive)
	// 		}
	// 		else {
	// 			$(this).addClass(topActive)
	// 			text.stop().slideDown();
	// 		}
	// 	})
	// }


	// Swiper
	// const slider_pag = new Swiper('.pag-hero__slider', {
	// 	slidesPerView: 'auto',
	// 	spaceBetween: 45,
	// 	loop: false,
	// 	loopedSlides: 1,
	// 	slideToClickedSlide: true,
	// 	breakpoints: {
	// 		320: {
	// 			spaceBetween: 15,
	// 		},
	// 		374: {
	// 			spaceBetween: 25,
	// 		},
	// 		577: {
	// 			spaceBetween: 35,
	// 		},
	// 		625: {
	// 			spaceBetween: 40,
	// 		},
	// 		769: {
	// 			spaceBetween: 15,
	// 		},
	// 		993: {
	// 			spaceBetween: 30,
	// 		},
	// 		1440: {
	// 			spaceBetween: 45,
	// 		},
	// 	}
	// });

	// function mobileSlider() {
	// 	if ($(window).innerWidth() <= 1100) {
	// 		slider_product_main = new Swiper('.new__slider', {
	// 			slidesPerView: 2,
	// 			spaceBetween: 40,
	// 			navigation: {
	// 				nextEl: '.new-slider--prev',
	// 				prevEl: '.new-slider--next',
	// 			},
	// 			breakpoints: {
	// 				320: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 45,
	// 				},
	// 				376: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 45,
	// 				},
	// 				630: {
	// 					slidesPerView: 2,
	// 					spaceBetween: 45,
	// 				},
	// 			}
	// 		});
	// 	}

	// 	else {
	// 		if ($('.new__slider').hasClass('swiper-container-initialized')) {
	// 			slider_catalog.destroy();
	// 		}
	// 	}
	// }

	// Fancy-box

	// $('[data-src="#modal-polit"]').fancybox({
	// 	touch: 'false',
	// 	smallBtn: false,
	// 	buttons: '',
	// });

	// $('[data-src="#home-modal"]').fancybox({
	// 	touch: 'false',
	// 	smallBtn: false,
	// 	buttons: '',
	// });

	// $('[data-fancybox="gal"]').fancybox({
	// backFocus: false,
	// autoFocus: false,
	// hash: false,
	// });

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });




	// Menu-burger
	// burger.click(function () {
	// 	mobMenu.addClass('active')
	// })

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	// $(document).click(function (ev) {
	// 	if (!ev.target.closest('.header__burger') && !ev.target.closest('h1')) {
	// 		mobMenu.removeClass('active')
	// 	}
	// })

	// Яндекс карта
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map(getMap, {
	// 		center: [52.05693880953456, 118.68705543322154],
	// 		zoom: 4
	// 	});

	// 	var myPlacemark = new ymaps.Placemark([55.54055193739615, 108.71146949572154], {
	// 		hintContent: 'г. Борисоглебск, ул. Победы, д. 66',
	// 		balloonContent: 'г. Борисоглебск, ул. Победы, д. 66'
	// 	},
	// 		{
	// 			preset: 'islands#redIcon',
	// 			iconLayout: 'default#image',
	// 			iconImageSize: [20, 28],
	// 			iconImageOffset: [-19, -52]
	// 		});

	// 	myMap.geoObjects.add(myPlacemark);
	// });


	// Alertify
	// alertify.set('notifier', 'position', 'bottom-right');
	// alertify.set('notifier', 'delay', 10);

	// document.addEventListener('wpcf7mailsent', function (event) {
	// 	alertify.success(event.detail.apiResponse.message)
	// }, false);

	// document.addEventListener('wpcf7invalid', function (event) {
	// 	alertify.warning(event.detail.apiResponse.message);
	// }, false);

	// document.addEventListener('wpcf7mailfailed', function (event) {
	// 	alertify.error(event.detail.apiResponse.message);
	// }, false);

	// $(document).on('click', '.wpcf7-submit', function (e) {
	// 	if ($('.ajax-loader').hasClass('is-active')) {
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// });





});