/* nav slider */
const swiperNavSlider = new Swiper(".nav-slider", {
	speed: 500,
	slidesPerView: 'auto',
	spaceBetween: 15,
	
	
});




/* main banner */
const swiperMain = new Swiper(".main-banner", {
	speed: 500,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".main-next",
		prevEl: ".main-prev",
	},
});

/* sub banner */
const swiperSub = new Swiper(".sub-banner", {
	speed: 500,
	navigation: {
		nextEl: ".sub-next",
		prevEl: ".sub-prev",
	},
	slidesPerView: 5,
	spaceBetween: 10,
	breakpoints: {
		480: {
			slidesPerView: 7,
			spaceBetween: 15,
		},
		901: {
			slidesPerView: 8,
			spaceBetween: 20,
		},
	},
});


/* top offers */
const swiperTopOffer = new Swiper(".top-offer", {
	speed: 500,
	spaceBetween: 20,
	slidesPerView: 2,
	spaceBetween: 10,
	breakpoints: {
		480: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		901: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
});

/* choose by brand */
const swiperChooseByBrand = new Swiper(".choose-brand", {
	speed: 500,
	navigation: {
		nextEl: ".brand-next",
		prevEl: ".brand-prev",
	},
	slidesPerView: 3,
	spaceBetween: 10,
	breakpoints: {
		480: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
		901: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	},
});

/* best selling */
const swiperProduct = new Swiper(".product-swiper", {
	speed: 500,
	slidesPerView: 2,
	breakpoints: {
		480: {
			slidesPerView: 4,
		},
		901: {
			slidesPerView: 6,
		},
	},
});