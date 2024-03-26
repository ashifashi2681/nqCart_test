const swiperSub = new Swiper(".sub-banner", {
	speed: 500,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	navigation: {
		nextEl: ".sub-next",
		prevEl: ".sub-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 5,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 7,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 8,
			spaceBetween: 20,
		},
	},
});
