$(document).ready(function () {

	function setTransformSubtitle() {
		const cat_subtitle = $('.item-cat__subtitle');
		cat_subtitle.each(function (i, el) {
			$(el).closest('.item-cat__text').css('transform', `translateY(${$(el).innerHeight()}px)`);
		})
	}

	window.onload = function () {
		setTransformSubtitle()
	};





	// TweenMax.registerPlugin(MorphSVGPlugin);

	// if (document.querySelector('.decor-waves')) {
	// 	const tl_1 = new TimelineMax({ repeat: -1 });
	// 	const tl_2 = new TimelineMax({ repeat: -1 });
	// 	const tl_3 = new TimelineMax({ repeat: -1 });
	// 	const tl_4 = new TimelineMax({ repeat: -1 });

	// 	tl_1.to(".start-1", 7, { morphSVG: ".second-1", shapeIndex: 7, ease: 'linear' })
	// 	// .to(".start-1", 11, { morphSVG: ".second-4", shapeIndex: 7, ease: 'linear' });

	// 	tl_2.to(".start-2", 7, { morphSVG: ".second-2", shapeIndex: 3, ease: 'linear' })
	// 	// .to(".start-2", 9, { morphSVG: ".second-1", shapeIndex: 1, ease: 'linear' });

	// 	tl_3.to(".start-3", 7, { morphSVG: ".second-3", ease: 'linear' })
	// 	// .to(".start-3", 7, { morphSVG: ".second-2", ease: 'linear' });

	// 	tl_4.to(".start-4", 7, { morphSVG: ".second-4", ease: 'linear' })
	// 	// .to(".start-4", 4, { morphSVG: ".second-3", ease: 'linear' });

	// }

	$(window).resize(function () {
		setTransformSubtitle()
	});

	const round = $('.round');
	const roundBtn = $('.round__btn');
	const border1 = $('.round__el--1');
	const border2 = $('.round__el--2');
	const border3 = $('.round__el--3');
	const border4 = $('.round__el--4');
	const border5 = $('.round__el--5');
	const height = round.innerHeight() / 2;
	const width = round.innerWidth() / 2;

	round.mousemove(function (event) {



		var x = event.offsetX - width;
		var y = event.offsetY - height;

		roundBtn.css('transform', `translate(${x / 10}px, ${y / 10}px)`);
		border1.css('transform', `translate(${x / 3}px, ${y / 3}px)`);
		border2.css('transform', `translate(${x / 3}px, ${y / 3}px)`);
		border3.css('transform', `translate(${x / 3}px, ${y / 3}px)`);
		border4.css('transform', `translate(${x / 3}px, ${y / 3}px)`);
		border5.css('transform', `translate(${x / 3}px, ${y / 3}px)`);





	});

	round.mouseleave(function () {
		roundBtn.css('transform', 'translate(0px, 0px)');
		border1.css('transform', 'translate(0px, 0px)');
		border2.css('transform', 'translate(0px, 0px)');
		border3.css('transform', 'translate(0px, 0px)');
		border4.css('transform', 'translate(0px, 0px)');
		border5.css('transform', 'translate(0px, 0px)');
	})









	// $('.item-cat').hover(
	// 	function () {
	// 		$('.item-cat__text').css('transform', 'translateY(0)')
	// 	},
	// 	function () {
	// 		$('.item-cat__text').css('transform', 'translateY(55px)')
	// 	}
	// )



	let my_range



	// Swiper
	const slider_pag = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 45,
		on: {
			slideChange: function () {
				if (my_range.old_from != this.activeIndex) {
					my_range.update({
						from: this.activeIndex
					})
				}
			},
		}
	});

	$(".range-slider").ionRangeSlider({
		grid: true,
		from: 0,
		values: ['2017', '2018', '2019', '2021', ' 2022', '2023'],
		hide_min_max: true,
		prettify_enabled: false,
		grid_margin: false,

		onChange: function (data) {
			slider_pag.slideTo(data.from);
		},
	});

	my_range = $(".range-slider").data("ionRangeSlider");


	// const cursor = $('.cursor');

	// cursor.on('mousedown', function (ev) {
	// 	let offset = cursor.offset().left

	// 	$(document).on('mousemove', function (e) {
	// 		let x = e.clientX;

	// 		cursor.css('left', `(${x - offset}px)`);
	// 		// console.log(x)
	// 	})

	// 	$(document).on('mouseup', function (e) {
	// 		$(document).off('mousemove')
	// 		cursor.off('mouseup')
	// 	})

	// })

	const slider_partners = new Swiper('.partners__slider', {
		slidesPerView: 5,
		spaceBetween: 40,
		// loop: true,
		// autoplay: {
		// 	delay: 4000,
		// },
		// navigation: {
		// 	nextEl: '.nav-slider--next',
		// 	prevEl: '.nav-slider--prev',
		// },
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			993: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
		}
	});







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