const swiperMain = new Swiper(".main-banner", {
	speed: 500,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	navigation: {
		nextEl: ".main-next",
		prevEl: ".main-prev",
	},
});
