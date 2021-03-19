$(document).ready(function () {

	function setTransformSubtitle() {
		const cat_subtitle = $('.item-cat__subtitle');
		cat_subtitle.each(function (i, el) {
			$(el).closest('.item-cat__text').css('transform', `translateY(${$(el).innerHeight()}px)`);
		})
	}

	window.onload = function () {
		if ($(window).innerWidth() >= 1201) {
			setTransformSubtitle()
			$(window).resize(function () {
				setTransformSubtitle()
			});
			if (document.querySelector('.consalt__right')) {

				const image = $('.consalt__image')
				const offsetBlock = image.offset().top;

				const image2 = $('.about__image')
				const offsetBlock2 = image2.offset().top;

				function parallax() {
					// let scrollPos = 0;
					let offsetScroll = $(document).scrollTop();

					const start = offsetBlock - $(window).innerHeight() / 2;
					const finish = offsetBlock + $(window).innerHeight() / 3;
					const raznica = finish - start;
					const index = 0.2 / raznica;

					if (offsetScroll >= start && offsetScroll < finish) {

						let value = offsetScroll - offsetBlock + $(window).innerHeight() / 2;
						let ratio = 1;
						image.css('transform', `scale(${1 + (value * index)})`)
					}
				}

				function parallax2() {
					// let scrollPos = 0;
					let offsetScroll = $(document).scrollTop();

					const start = offsetBlock2 - $(window).innerHeight() / 2;
					const finish = offsetBlock2 + $(window).innerHeight() / 3;
					const raznica = finish - start;
					const index = 0.2 / raznica;

					if (offsetScroll >= start && offsetScroll < finish) {

						let value = offsetScroll - offsetBlock2 + $(window).innerHeight() / 2;
						let ratio = 1;
						image2.css('transform', `scale(${1 + (value * index)})`)
					}
				}



				$(window).on('scroll', function () {
					parallax()
					parallax2()
				});
			}
		}
	};

	if ($(window).innerWidth() >= 1201) {
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
			border1.css('transform', `translate(${x / 2}px, ${y / 2}px)`);
			border2.css('transform', `translate(${x / 2}px, ${y / 2}px)`);
			border3.css('transform', `translate(${x / 2}px, ${y / 2}px)`);
			border4.css('transform', `translate(${x / 2}px, ${y / 2}px)`);
			border5.css('transform', `translate(${x / 2}px, ${y / 2}px)`);
		});

		round.mouseleave(function () {
			roundBtn.css('transform', 'translate(0px, 0px)');
			border1.css('transform', 'translate(0px, 0px)');
			border2.css('transform', 'translate(0px, 0px)');
			border3.css('transform', 'translate(0px, 0px)');
			border4.css('transform', 'translate(0px, 0px)');
			border5.css('transform', 'translate(0px, 0px)');
		})

		if (document.querySelector('.decor-waves')) {
			const tl_1 = new TimelineMax({ repeat: -1 });
			const tl_2 = new TimelineMax({ repeat: -1 });
			const tl_3 = new TimelineMax({ repeat: -1 });
			const tl_4 = new TimelineMax({ repeat: -1 });

			tl_1.to(".start-1", 7, { morphSVG: ".second-1", shapeIndex: 7, ease: 'linear' })
			// .to(".start-1", 11, { morphSVG: ".second-4", shapeIndex: 7, ease: 'linear' });

			tl_2.to(".start-2", 7, { morphSVG: ".second-2", shapeIndex: 3, ease: 'linear' })
			// .to(".start-2", 9, { morphSVG: ".second-1", shapeIndex: 1, ease: 'linear' });

			tl_3.to(".start-3", 7, { morphSVG: ".second-3", ease: 'linear' })
			// .to(".start-3", 7, { morphSVG: ".second-2", ease: 'linear' });

			tl_4.to(".start-4", 7, { morphSVG: ".second-4", ease: 'linear' })
			// .to(".start-4", 4, { morphSVG: ".second-3", ease: 'linear' });

		}
	}

	const burger = $('.burger');
	const mobMenu = $('.mob-menu');
	let menuItemDelay = 0.75;

	$('.mob-menu__nav li').each(function (i, el) {
		menuItemDelay += 0.03;
		$(el).css('transition-delay', `${menuItemDelay}s`)
	})


	$('.irs-grid-text').each(function (id, el) {
		if ($(el).text() === '0') {
			$(el).css({
				'opacity': '0',
				'visibility': 'hidden'
			});
			$(el).prev('.irs-grid-pol').css('transform', 'scale(0.7)')
		}

	})



	const slider_partners = new Swiper('.partners__slider', {
		slidesPerView: 5,
		spaceBetween: 40,
		// loop: true,
		// autoplay: {
		// 	delay: 4000,
		// },
		navigation: {
			nextEl: '.partners__next',
			prevEl: '.partners__prev',
		},
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



	objectFitImages();

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

	$('[data-src="#modal-polit"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

	$('[data-src="#modal-buy"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

	// $('[data-fancybox="gal"]').fancybox({
	// backFocus: false,
	// autoFocus: false,
	// hash: false,
	// });

	// Input-mask
	$('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });




	// Menu-burger
	burger.click(function () {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		document.body.style.paddingRight = paddingOffset;
		mobMenu.toggleClass('active')
		$(this).toggleClass('active')
		$(document.body).toggleClass('disable-scroll')
		$(document).scrollTop(0)
	})

	$(document).click(function (ev) {
		if (!ev.target.closest('.burger') && !ev.target.closest('.mob-menu')) {
			document.body.style.paddingRight = '0px';
			mobMenu.removeClass('active')
			burger.removeClass('active')
			$(document.body).removeClass('disable-scroll')
		}
	})

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


	function jsCompanyHistory() {
		$(".js-company-history").each((function (e, n) {
			var i = $(n),
				r = i.find(".js-company-history-slider"),
				o = i.find(".js-company-history-dot"),
				a = i.find(".js-company-history-dots"),
				s = i.find(".js-company-history-dragger"),
				l = i.find(".js-company-history-info"),
				c = $(".company__history-year"),
				u = $(".company__history-figure-img"),
				d = 0;
			a.length > 0 && (d = a[0].scrollWidth, $(window).resize((function () {
				d = a[0].scrollWidth
			})));
			var h = [];
			o.each((function (t, e) {
				h.push(e.offsetLeft)
			})),
				$(window).resize((function () {
					h = [],
						o.each((function (t, e) {
							h.push(e.offsetLeft)
						}))
				})),
				r.on("translated.owl.carousel", (function (t) {
					var e = i.find(".active").first(),
						n = e.index(),
						r = e.find(".company__history-slide"),
						o = parseInt(c.text()),
						d = parseInt(r.data("year")),
						f = r.data("year"),
						p = r.data("img");
					if (d > 0 && o !== d && (c.html(f), l.animate({
						opacity: 0
					}, 150), u.one("load", (function () {
						l.animate({
							opacity: 1
						}, 150)
					})), u.attr("src", p)), !g && !m) {
						s.stop().animate({
							left: h[n]
						}, 150);
						var v = h[n] < document.documentElement.clientWidth / 2 ? 0 : h[n] - document.documentElement.clientWidth / 2;
						a.css({
							transform: "translateX(".concat(-v, "px)")
						})
					}
				})),
				r.owlCarousel({
					dots: !0,
					loop: !1,
					items: 1,
					responsive: {
						768: {
							// autoWidth: !0,
							// margin: 64
						},
						1392: {
							// autoWidth: !0,
							// margin: 120
						}
					}
				});
			var f = $(".js-history-slider-arrow-prev");
			$(".js-history-slider-arrow-next").on("click", (function () {
				var t = i.find(".active").first().index();
				(t += 1) >= o.length && (t = o.length - 1),
					r.trigger("to.owl.carousel", [t])
			})),
				f.on("click", (function () {
					var t = i.find(".active").first().index();
					(t -= 1) < 0 && (t = 0),
						r.trigger("to.owl.carousel", [t])
				})),
				o.click((function (e) {
					var n = $(e.currentTarget).index() - 1;
					r.trigger("to.owl.carousel", [n])
				}));
			var p, g = !1,
				m = !1;
			if (s.length > 0) {
				var v = new Hammer(s[0]),
					y = 0;
				v.add(new Hammer.Pan({
					direction: Hammer.DIRECTION_ALL,
					threshold: 0
				})),
					v.on("pan", (function (t) {
						var e = s[0];
						g || (g = !0, y = e.offsetLeft);
						var n = t.deltaX + y;
						if (n >= 0 && n <= d) {
							var i = s.offset().left;
							e.style.left = n + "px",
								(i >= document.documentElement.clientWidth - 20 || i <= 20) && (p || (p = setInterval((function () {
									!0,
										i = s.offset().left;
									var t = a.css("transform").split(/[()]/)[1],
										n = t ? parseFloat(t.split(",")[4]) : 0;
									if (i >= document.documentElement.clientWidth - 20) {
										var r = e.offsetLeft + 16;
										r <= d ? (y += 16, e.style.left = r + "px", a.css({
											transform: "translateX(".concat(n - 16, "px)")
										})) : r <= d + 16 && a.css({
											transform: "translateX(".concat(n - 16, "px)")
										})
									} else if (i <= 20) {
										var o = e.offsetLeft - 16;
										o > 0 ? (y -= 16, e.style.left = o + "px", a.css({
											transform: "translateX(".concat(n + 16, "px)")
										})) : n < 16 && a.css({
											transform: "translateX(".concat(n + 16, "px)")
										})
									} else !1,
										clearInterval(p),
										p = ""
								}), 24)));
							for (var o = 0, l = 0; l < h.length && n > h[l]; l++) o = l;
							r.trigger("to.owl.carousel", [o])
						}
						if (t.isFinal) {
							g = !1;
							for (var c = 0, u = 0, f = 0; f < h.length; f++) {
								if (!(n >= h[f])) {
									u = f;
									break
								}
								c = f
							}
							var v = Math.abs(n - h[c]),
								_ = 0;
							_ = Math.abs(n - h[u]) <= v ? u : c,
								m = !0,
								s.stop().animate({
									left: h[_]
								}, 150, (function () {
									m = !1
								})),
								r.trigger("to.owl.carousel", [_]),
								p && (!1, clearInterval(p), p = "")
						}
					})),
					$(window).resize((function () {
						y = 0,
							s.css("left", 0),
							a.css({
								transform: "translateX(".concat(0, "px)")
							}),
							r.trigger("to.owl.carousel", [0])
					}))
			}
		}))
	}


	jsCompanyHistory()

	$('.js-company-history-dragger').css('left', '13px')
});







